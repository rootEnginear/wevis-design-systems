import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { useStore, Show, useDefaultProps } from '@builder.io/mitosis';

interface WvNavbarProps {
  dark?: boolean;
  homeHref?: string;
  logoAddonSrc?: string;
  title?: string;
  alwayShowSlot?: boolean;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvNavbar(props: WvNavbarProps) {
  useDefaultProps<WvNavbarProps>({
    dark: false,
    homeHref: '/',
    logoAddonSrc: undefined,
    title: undefined,
    alwayShowSlot: false,
  });

  const state = useStore({
    isMobileMenuOpened: false,
  });

  return (
    <div
      class={`wv_navbar ${
        props.dark ? 'wv_navbar--black' : 'wv_navbar--white'
      }`}
    >
      <div class="wv_navbar__logo">
        <a class="wv_navbar__logo__wevis" href={props.homeHref}>
          <svg viewBox="0 0 110 37">
            <path d="M79.0175 35.3009V31.1026L80.3913 30.7904C80.7035 30.7568 80.7707 30.6511 80.7707 30.3101V16.8795C80.7707 16.6057 80.7035 16.5 80.3913 16.3991L79.0175 16.0581V11.8839H89.4843V16.0869L88.1057 16.4328C87.7982 16.5336 87.7262 16.6393 87.7262 16.9131V30.3293C87.7262 30.6367 87.7982 30.7087 88.072 30.8096L89.4843 31.1891V35.3201L79.0175 35.3009Z" />
            <path d="M59.962 35.3009L54.1257 16.8267C54.1054 16.7467 54.0615 16.6748 53.9999 16.62C53.9382 16.5652 53.8616 16.5301 53.7799 16.5192L51.9594 16.2118V11.9511H63.7375V16.2118L62.3637 16.6249C62.2309 16.6424 62.1089 16.7076 62.0205 16.8083C61.9321 16.9091 61.8834 17.0385 61.8834 17.1725C61.9069 17.5573 61.9762 17.9378 62.0899 18.3061L64.5973 28.1965H64.7655L67.2633 18.3205C67.3733 17.9513 67.4425 17.5712 67.4698 17.1869C67.4618 17.0499 67.406 16.92 67.3121 16.82C67.2182 16.7199 67.0921 16.656 66.9559 16.6393L65.6157 16.2262V11.9655H77.0864V16.1926L75.1987 16.5673C75.1134 16.5845 75.035 16.6265 74.9735 16.688C74.912 16.7495 74.87 16.8278 74.8528 16.9131L69.1895 35.3153L59.962 35.3009Z" />
            <path d="M91.8236 33.6148C91.8464 31.4846 91.9971 29.3576 92.2751 27.2454H97.9096L98.462 29.9306C99.1838 30.173 99.9391 30.301 100.7 30.31C102.007 30.31 102.867 29.724 102.867 28.7921C102.867 27.6249 101.387 27.1782 99.6293 26.6594C96.1179 25.593 91.9197 24.2144 91.9197 18.772C91.9197 13.3297 95.4983 11.5428 100.907 11.5428C104.351 11.5428 106.59 12.4362 108.996 13.5747C109.031 15.5893 108.905 17.6035 108.621 19.5982H102.982L102.708 17.2253C102.162 16.9957 101.576 16.878 100.984 16.8795C99.7109 16.8795 98.8847 17.1869 98.8847 18.186C98.8847 19.3581 100.47 20.0498 102.19 20.631C105.552 21.731 109.837 23.2489 109.837 28.2445C109.837 33.2402 106.666 35.6803 100.676 35.6803C97.6083 35.6612 94.5834 34.9555 91.8236 33.6148Z" />
            <path d="M13.7716 11.9511V16.2022L15.4576 16.6826C16.159 16.8699 16.1493 17.2302 15.7843 18.3205L12.5179 28.2205H12.2825L9.7607 18.3205C9.47729 17.2638 9.4821 16.8219 10.0873 16.6826L11.879 16.2022V11.9511H0V16.2022L1.9214 16.5769C2.10873 16.6249 2.15197 16.7162 2.2 16.9035L7.96419 35.3009H16.2502L19.1323 25.5258L22.0144 35.2865H30.3245L36.0886 16.8891C36.1107 16.8087 36.1533 16.7354 36.2122 16.6765C36.2712 16.6175 36.3445 16.5749 36.4249 16.5529L38.2838 16.1878V11.9367H26.4144V16.1878L28.2061 16.6681C28.8162 16.8074 28.8162 17.2494 28.5328 18.3061L26.0109 28.2061H25.7803L22.4948 18.3205C22.1345 17.2302 22.1201 16.8795 22.8214 16.6826L24.5074 16.2022V11.9511H13.7716Z" />
            <path d="M43.7167 24.7524H46.8245V23.8686C46.8245 22.9079 46.2769 22.3987 45.2874 22.3987C44.2979 22.3987 43.7167 22.9127 43.7167 23.8686V24.7524ZM37.0927 28.7825V24.2768C37.0927 20.1458 40.3014 17.4127 45.1529 17.4127C50.0044 17.4127 53.2084 20.1458 53.2084 24.2768V28.1196H43.7167V29.0419C43.7167 30.0314 44.8791 30.6799 46.1184 30.6799C47.3577 30.6799 48.5778 30.1323 48.7796 29.2821H53.1844V32.6445C51.4119 34.7293 48.7123 35.6515 45.9119 35.6515C40.6472 35.6467 37.0927 32.9135 37.0927 28.7825Z" />
            <path d="M84.4022 9.79911C86.4449 9.79911 88.1009 8.14315 88.1009 6.10042C88.1009 4.05769 86.4449 2.40173 84.4022 2.40173C82.3594 2.40173 80.7035 4.05769 80.7035 6.10042C80.7035 8.14315 82.3594 9.79911 84.4022 9.79911Z" />
          </svg>
          <Show when={props.logoAddonSrc}>
            <img src={props.logoAddonSrc} class="wv_navbar__logo__addon" />
          </Show>
        </a>
      </div>

      <Show when={props.title}>
        <div class="wv_navbar__title wv-font-kondolar wv-h9">{props.title}</div>
      </Show>

      <div
        class={`wv_navbar__menu wv_navbar__menu--desktop ${
          props.alwayShowSlot
            ? 'wv_navbar__menu--always-show'
            : 'wv_navbar__menu--hide-mobile'
        }`}
      >
        {props.children}
      </div>

      <Show when={!props.alwayShowSlot}>
        <button
          class="wv_navbar__hamburger-button"
          onClick={() => (state.isMobileMenuOpened = !state.isMobileMenuOpened)}
        >
          {state.isMobileMenuOpened ? (
            <svg width="13" height="14" viewBox="0 0 13 14">
              <rect
                x="13"
                y="2.38806"
                width="15"
                height="2"
                transform="rotate(135 13 2.38806)"
              />
              <rect
                x="2.3934"
                y="1.00525"
                width="15"
                height="2"
                transform="rotate(45 2.3934 1.00525)"
              />
            </svg>
          ) : (
            <svg width="15" height="12" viewBox="0 0 15 12">
              <rect width="15" height="2" />
              <rect y="5" width="15" height="2" />
              <rect y="10" width="15" height="2" />
            </svg>
          )}
        </button>
      </Show>

      <Show when={state.isMobileMenuOpened}>
        <div
          class="wv_navbar__menu wv_navbar__menu--mobile"
          onClick={() => (state.isMobileMenuOpened = false)}
        >
          {props.children}
        </div>
      </Show>
    </div>
  );
}
