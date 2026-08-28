/*
 * Install_PsMagic_Actions.jsx
 * ---------------------------
 * PiMagic Photoshop Actions Installer
 *
 * Removes any existing "PsMagic Actions" set, then loads the current version.
 * Run via: File > Scripts > Browse... or double-click.
 *
 * The .atn file must be in the same folder as this script.
 */

#target photoshop

(function () {
   var ACTION_SET_NAME = "PsMagic Actions";
   var ATN_FILENAME    = "PsMagic_Actions.atn";

   // Locate the .atn file next to this script
   var scriptFile = new File($.fileName);
   var atnFile    = new File(scriptFile.parent + "/" + ATN_FILENAME);

   if (!atnFile.exists) {
      alert("Cannot find " + ATN_FILENAME + " in:\n" + scriptFile.parent.fsName +
            "\n\nPlace the .atn file next to this installer script.");
      return;
   }

   // Remove existing action set if loaded
   try {
      var ref = new ActionReference();
      ref.putName(charIDToTypeID("ASet"), ACTION_SET_NAME);

      var desc = new ActionDescriptor();
      desc.putReference(charIDToTypeID("null"), ref);
      executeAction(charIDToTypeID("Dlt "), desc, DialogModes.NO);
   } catch (e) {
      // Set not loaded — nothing to remove
   }

   // Load the new version
   app.load(atnFile);

   alert(ACTION_SET_NAME + " installed successfully.");
})();
