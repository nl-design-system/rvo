import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import navigationConfig from './config/navigationConfig';
import sidebarItemsGenerator from './config/sidebarItemsGenerator';

const includeList = ['**/*.docusaurus.{md,mdx}'];
const excludeList = ['node_modules/**/*', '**/!(*.docusaurus)*'];

const config: Config = {
  title: 'ROOS Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  favicon: 'img/favicon.ico',
  url: process.env.DOCUSAURUS_URL || 'https://nl-design-system.github.io',
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/rvo/docs/',
  organizationName: 'nl-rvo',
  projectName: 'rvo',
  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  plugins: [
    process.env.RSDOCTOR === 'true' && 'rsdoctor',
    'docusaurus-plugin-matomo',
    './plugins/docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        sidebarPath: require.resolve('./config/docsSidebarConfig.js'),
        sidebarItemsGenerator,
        path: path.resolve(__dirname, '../../documentation/pages'),
        routeBasePath: '/',
        editUrl: undefined,
        breadcrumbs: false,
        include: includeList,
        exclude: excludeList,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'components',
        path: path.resolve(__dirname, '../../components'),
        routeBasePath: 'componenten',
        editUrl: undefined,
        breadcrumbs: false,
        sidebarPath: require.resolve('./config/componentsSidebarConfig.js'),
        sidebarItemsGenerator,
        include: includeList,
        exclude: excludeList,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        debug: process.env['NODE_ENV'] === 'development' ? true : false,
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve('@nl-rvo/assets/fonts/index.css'),
            require.resolve('@nl-rvo/assets/icons/index.css'),
            require.resolve('@nl-rvo/assets/images/index.css'),
            require.resolve('@nl-rvo/design-tokens/dist/index.css'),
            require.resolve('./src/scss/custom.scss'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        'piwik-tracker': 'tagmanager',
        'piwik-versie': '2',
      },
      innerHTML: `(function(window, document, dataLayerName, id) {
        window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
        function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString();f=";secure;SameSite=Strict"}document.cookie=a+"="+b+d+f+"; path=/"}
        var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
        var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),qP.push("use_secure_cookies"),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";tags.async=!0,tags.src="https://statistiek.rvo.nl/containers/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
        !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
      })(window, document, 'dataLayer', '488e57de-d4d8-4752-a2df-a963537e257e');`,
    },
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    metadata: [
      {
        name: 'Content-Security-Policy',
        content: `frame-ancestors 'none'; object-src 'none'; base-uri 'none'; default-src 'self'; media-src 'none'; form-action 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' https://statistiek.rvo.nl; style-src 'unsafe-inline' 'self'; connect-src 'self' https://*.algolia.net https://*.algolianet.com https://statistiek.rvo.nl; frame-src 'self' https://nl-design-system.github.io; font-src 'self';`,
      },
    ],
    matomo: {
      matomoUrl: 'https://matomo.roose.digital/',
      siteId: '10',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    ...navigationConfig,
  } satisfies Preset.ThemeConfig,
  future: {
    experimental_faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },
};

export default config;
