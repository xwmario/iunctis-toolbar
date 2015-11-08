import { onToolbarCreate } from 'discourse/components/d-editor';

export default
{
  name: 'spoiler-ui',
  initialize(container)
  {
    const siteSettings = container.lookup('site-settings:main');

    if (siteSettings.spoiler_ui_enabled) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "titrenews_ui_button",
          group: "extras",
          icon: "newspaper-o",
          perform: e => e.applySurround('[t]', '[/t]<hr>', 'titrenews_ui_default_text')
        });
      });
      
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "ajoutimage_ui_button",
          group: "extras",
          icon: "picture-o",
          perform: e => e.applySurround('[img]', '[/img]', 'ajoutimage_ui_default_text')
        });
      });
      
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "spoiler_ui_button",
          group: "extras",
          icon: "eye-slash",
          perform: e => e.applySurround('[spoiler]', '[/spoiler]', 'spoiler_ui_default_text')
        });
      });
    }
  }
};
