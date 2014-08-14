'use strict';

angular.module('testApp')
  .service('popupService', ['$compile', '$rootElement', '$timeout', function($compile, $rootElement, $timeout) {


  	function Dialog(name, scope, template, product,okCallback,cancelCallback) {
  	  // URLs use ng-include to fetch template async
      /*if(isURL) {
        // HACK: Need to include double AND single quotes for ng-include
        // otherwise it doesn't work
        template = '<div ><div ng-include="\'views/' + template + '.html\'"></div></div>';
      } else {
        template = '<div>'+ template + '</div>';
      }*/
      template = '<div ><div ng-include="\'views/' + template + '.html\'"></div></div>';
      var inheritedscope = scope.$new(false);
      inheritedscope.popupName = name;
      inheritedscope.product = product;
      // Create the angular template
      // Resolve variables/includes in the template
      template = $compile(template)(inheritedscope);
      // Attach properties
      template.attr('id', name);
      // All popups inherit the popup class
      // TODO: Add CSS rules for popup class in stylesheets
     // template.addClass('popup');
      // Hide the dialog until it is shown
      // TODO: Add CSS rules for hidden class in stylesheets
     // template.addClass('hidden');
      // append template to the html body
      $rootElement.append(template);

      // Listen to button events from the template
      /*var deregister = inheritedscope.$on('btnEvent', function(e,typ) {
        switch(typ) {
          case 'ok':
            okCallback(Array.prototype.slice.call(arguments, 0).slice(2));
            deregister();
            break;
          case 'cancel':
            cancelCallback(Array.prototype.slice.call(arguments, 0).slice(2));
            deregister();
            break;
          default:
            break;
        }
      });*/



      // Save variables
      this.template = template;
      this.name = name;
      this.scope = inheritedscope;
      this.product = product;

      // Save template for later access
       Dialog.dialogs[name] = this;
    };

    // Stores a mapping from dialogName to dialogs
    Dialog.dialogs = {};

     // Our private Dialog Class
    Dialog.prototype.open = function() {
      this.template.removeClass('hidden');
      return this;
    };


    Dialog.prototype.close = function() {
      this.template.addClass('hidden');
      return this;
    };

    // Removes this dialog from the DOM
    // NOTE: After this is called, open/close will give an error!
    Dialog.prototype.remove = function() {
      this.template.remove();
      delete Dialog.dialogs[this.name];
      //HACK. Destroy scope (essentially registered handlers) only after some timeout, as digest cycle might be running.
      $timeout(function(){this.scope.$destroy()}.bind(this),1);
      return this;
    };

     // Returns true if this dialog is currently open
    Dialog.prototype.isOpen = function() {
      return (Dialog.dialogs[this.name] && !this.template.hasClass('hidden'));
    };

    this.dialog = function(name, scope, template, isUrl,okCallback,cancelCallback){

      // If we already created the dialog, there is no more work to be done
      if(Dialog.dialogs[name]) {
        return Dialog.dialogs[name];
      }

      return new Dialog(name, scope, template, isUrl,okCallback,cancelCallback);
    };

    this.openDialog = function(name) {
      if(Dialog.dialogs[name]) {
        return Dialog.dialogs[name].open();
      }
    };

    this.closeDialog = function(name) {
      if(Dialog.dialogs[name]) {
        return Dialog.dialogs[name].close();
      }
    };

    this.closeAllDialogs = function() {
      var i, dialog;
      var dialogs = Dialog.dialogs;
      for(i in dialogs) {
        if(dialogs.hasOwnProperty(i)) {
          dialog = dialogs[i];
          if(dialog.isOpen()) {
            dialog.close();
            dialog.remove();
          }
        }
      }
    };

    this.isOpenDialog = function(name){
      if(Dialog.dialogs[name]) {
        return Dialog.dialogs[name].isOpen();
      }
      return false;
    };

    /*
     * removes a dialog from DOM.
     * Returns the dialog itself for further chaining
     */
    this.removeDialog = function(name){
      if(Dialog.dialogs[name]) {
        return Dialog.dialogs[name].remove();
      }
    };

  }]);
