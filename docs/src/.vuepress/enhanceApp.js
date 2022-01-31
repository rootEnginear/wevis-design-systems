import WvButton from '@wevisdemo/ui/components/button.vue';
import WvButtonGroup from '@wevisdemo/ui/components/button-group.vue';
import WvContainer from '@wevisdemo/ui/components/container.vue';
import WvFooter from '@wevisdemo/ui/components/footer.vue';
import WvNavbar from '@wevisdemo/ui/components/navbar.vue';
import WvNavButton from '@wevisdemo/ui/components/nav-button.vue';
import WvNavDropdown from '@wevisdemo/ui/components/nav-dropdown.vue';
import WvParagraphGroup from '@wevisdemo/ui/components/paragraph-group.vue';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';

import '@wevisdemo/ui/styles/typography.css';
import '@wevisdemo/ui/styles/components.css';

export default ({ Vue }) => {
  Vue.component('WvButton', WvButton);
  Vue.component('WvButtonGroup', WvButtonGroup);
  Vue.component('WvContainer', WvContainer);
  Vue.component('WvFooter', WvFooter);
  Vue.component('WvNavbar', WvNavbar);
  Vue.component('WvNavButton', WvNavButton);
  Vue.component('WvParagraphGroup', WvParagraphGroup);
  Vue.component('WvSharer', WvSharer);
  Vue.component('WvNavDropdown', WvNavDropdown);
};
