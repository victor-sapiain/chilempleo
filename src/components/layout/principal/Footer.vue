<template>
<div>
<footer class="footer">
    <div class="master-container">
        <a class="logo" href="/">
            &nbsp;
        </a>
        <div class="row m-top-xl" v-show="mode==1">
            <div class="col">
                <ul class="unstyled text xsmall black">
                    <li><div class="text xsmall title bold">CANDIDATO</div></li>
                    <li><a href="/local/in-home-care">In-Home Care</a></li>
                    <li><a href="/local/independent-living">Independent Living Communities</a></li>
                    <li><a href="/local/assisted-living">Assisted Living Communities</a></li>
                    <li><a href="/local/memory-care">Memory Care Communities</a></li>
                    <li><a href="/local/nursing-homes">Nursing Homes</a></li>
                </ul>
            </div>
            <div class="col">
                <ul class="unstyled text xsmall">
                    <li><div class="text xsmall title bold">EMPLEADOR</div></li>
                    <li><a href="/caregiver-forum">Caregiver Forum</a></li>
                    <li><a href="/ebooks">Senior Care Guides</a></li>
                    <li><a href="/local/elder-law-attorneys">Elder Law Attorneys</a></li>
                    <li><a href="/products">Senior Care Products</a></li>
                </ul>
            </div>
            <div class="col">
                <ul class="unstyled text xsmall">
                    <li><div class="text xsmall title bold">SIGUENOS</div></li>                    
                    <li>
                        <a href="#" class="fa fa-facebook" aria-hidden="true"></a>  
                        <a href="#" class="fa fa-twitter" aria-hidden="true"></a>  
                        <a href="#" class="fa fa-linkedin" aria-hidden="true"></a>  
                    </li>
                    <li>contacto@chilempleo.cl</li> 
                </ul>
            </div>
        </div>
        <div class="row m-top-xl" v-show="mode==2">
            <div class="col">
                <ul class="unstyled text xsmall">
                    <li><div class="text xsmall title bold">SIGUENOS</div></li>                    
                    <li>
                        <a href="https://www.facebook.com/chilempleo/" class="fa fa-facebook" aria-hidden="true"></a>  
                        <a href="https://twitter.com/chilempleo_" class="fa fa-twitter" aria-hidden="true"></a>  
                    </li>
                    <li>contacto@chilempleo.cl</li> 
                </ul>
            </div>
        </div>
    </div>
  
</footer>
</div>
</template>
<script>
import config from '../../../../src/config'

export default {
  name: 'Footer',
  data(){
      return{
          mode:-1
      }
  },
  mounted(){
      this.mode = config.mode  
  },
  components: {
   
  },
   
  computed: {
   
  }
}
</script>
<style scoped>
@charset "UTF-8";
/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */

.hamburger,
button,
hr,
input {
    overflow: visible
}
audio,
canvas,
progress,
video {
    display: inline-block
}
progress,
sub,
sup {
    vertical-align: baseline
}
[type=checkbox],
[type=radio],
legend {
    padding: 0;
    box-sizing: border-box
}
.main-navigation.sticky,
.main-navigation.sticky>* {
    -webkit-transform: translateZ(0)
}
.ac-field,
.fancy-steppanel,
.form,
.master-container,
legend {
    box-sizing: border-box
}
.main-navigation,
.navbar {
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#0190ad', endColorstr='#017f98', GradientType=1)
}
#topLeaderBoard>img,
.comment .header button.ac-button,
.comment .replyWrapper .loader,
.fancy-steppanel,
.findcarehousing,
.input-field .field2 {
    align-self: center
}
html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}
body {
    margin: 0
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section {
    display: block
}
h1 {
    font-size: 2em
}
figure {
    margin: 1em 40px
}
code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}
abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
}
b,
strong {
    font-weight: bolder
}
dfn {
    font-style: italic
}
mark {
    background-color: #ff0;
    color: #fff
}
small {
    font-size: 80%
}
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative
}
sub {
    bottom: -.25em
}
sup {
    top: -.5em
}
audio:not([controls]) {
    display: none;
    height: 0
}
img {
    border-style: none
}
svg:not(:root) {
    overflow: hidden
}
button,
input,
optgroup,
select,
textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
}
button,
select {
    text-transform: none
}
[type=reset],
[type=submit],
button,
html [type=button] {
    -webkit-appearance: button
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
    border-style: none;
    padding: 0
}
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
    outline: ButtonText dotted 1px
}
legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal
}
textarea {
    overflow: auto
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
    height: auto
}
[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}
summary {
    display: list-item
}
[hidden],
template {
    display: none
}
@font-face {
    font-family: 'Kamerik 105';
    src: url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/Kamerik/bold/webfont.woff2) format("woff2"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/Kamerik/bold/webfont.woff) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: fallback
}
@font-face {
    font-family: 'Kamerik 105';
    src: url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/Kamerik/book/webfont.woff2) format("woff2"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/Kamerik/book/webfont.woff) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: fallback
}
@font-face {
    font-family: 'Kamerik 105';
    src: url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/Kamerik/light/webfont.woff2) format("woff2"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/Kamerik/light/webfont.woff) format("woff");
    font-weight: 200;
    font-style: normal;
    font-display: fallback
}
@font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    src: url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/bold/webfont.eot);
    src: local("Nunito Sans Bold"), local("NunitoSans-Bold"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/bold/webfont.eot?#iefix) format("embedded-opentype"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/bold/webfont.woff2) format("woff2"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/bold/webfont.woff) format("woff"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/bold/webfont.ttf) format("truetype"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/bold/webfont.svg#NunitoSans) format("svg");
    font-display: fallback
}
@font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    src: url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/semibold/webfont.eot);
    src: local("Nunito Sans SemiBold"), local("NunitoSans-SemiBold"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/semibold/webfont.eot?#iefix) format("embedded-opentype"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/semibold/webfont.woff2) format("woff2"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/semibold/webfont.woff) format("woff"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/semibold/webfont.ttf) format("truetype"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/semibold/webfont.svg#NunitoSans) format("svg");
    font-display: fallback
}
@font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/regular/webfont.eot);
    src: local("Nunito Sans Regular"), local("NunitoSans-Regular"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/regular/webfont.eot?#iefix) format("embedded-opentype"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/regular/webfont.woff2) format("woff2"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/regular/webfont.woff) format("woff"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/regular/webfont.ttf) format("truetype"), url(https://ac-cdn.azureedge.net/resources/Content/www/fonts/NunitoSans/regular/webfont.svg#NunitoSans) format("svg");
    font-display: fallback
}
.top-page-pad {
    padding-top: 32px
}
.bottom-page-pad {
    padding-bottom: 32px
}
fieldset,
h1,
h2,
h3,
p {
    margin: 0;
    padding: 0;
    border: none
}
.m-left-xs,
.m-leftright-xs {
    margin-left: 4px
}
.m-leftright-xs,
.m-right-xs {
    margin-right: 4px
}
.m-top-xs,
.m-topbtm-xs {
    margin-top: 4px
}
.m-btm-xs,
.m-topbtm-xs {
    margin-bottom: 4px
}
.pad-left-xs,
.pad-leftright-xs {
    padding-left: 4px
}
.pad-leftright-xs,
.pad-right-xs {
    padding-right: 4px
}
.pad-top-xs,
.pad-topbtm-xs {
    padding-top: 4px
}
.pad-btm-xs,
.pad-topbtm-xs {
    padding-bottom: 4px
}
.pad-xs {
    padding: 4px
}
.pad-left-s,
.pad-leftright-s {
    padding-left: 8px
}
.pad-leftright-s,
.pad-right-s {
    padding-right: 8px
}
.pad-top-s,
.pad-topbtm-s {
    padding-top: 8px
}
.pad-btm-s,
.pad-topbtm-s {
    padding-bottom: 8px
}
.pad-s {
    padding: 8px
}
.pad-left-ms,
.pad-leftright-ms {
    padding-left: 12px
}
.pad-leftright-ms,
.pad-right-ms {
    padding-right: 12px
}
.pad-top-ms,
.pad-topbtm-ms {
    padding-top: 12px
}
.pad-btm-ms,
.pad-topbtm-ms {
    padding-bottom: 12px
}
.pad-ms {
    padding: 12px
}
.pad-left-m,
.pad-leftright-m {
    padding-left: 16px
}
.pad-leftright-m,
.pad-right-m {
    padding-right: 16px
}
.pad-top-m,
.pad-topbtm-m {
    padding-top: 16px
}
.pad-btm-m,
.pad-topbtm-m,
ul.blocklist>li {
    padding-bottom: 16px
}
.pad-m {
    padding: 16px
}
.pad-left-l,
.pad-leftright-l {
    padding-left: 24px
}
.pad-leftright-l,
.pad-right-l {
    padding-right: 24px
}
.pad-top-l,
.pad-topbtm-l {
    padding-top: 24px
}
.pad-btm-l,
.pad-topbtm-l {
    padding-bottom: 24px
}
.pad-l {
    padding: 24px
}
.pad-left-xl,
.pad-leftright-xl {
    padding-left: 32px
}
.pad-leftright-xl,
.pad-right-xl {
    padding-right: 32px
}
.pad-top-xl,
.pad-topbtm-xl {
    padding-top: 32px
}
.pad-btm-xl,
.pad-topbtm-xl {
    padding-bottom: 32px
}
.pad-xl {
    padding: 32px
}
.master-container,
.pad-left-xxl,
.pad-leftright-xxl {
    padding-left: 48px
}
.master-container,
.pad-leftright-xxl,
.pad-right-xxl {
    padding-right: 48px
}
.pad-top-xxl,
.pad-topbtm-xxl,
footer.footer {
    padding-top: 0px
}
.pad-btm-xxl,
.pad-topbtm-xxl {
    padding-bottom: 48px
}
.pad-xxl {
    padding: 48px
}
.m-xs {
    margin: 4px
}
.m-left-s,
.m-leftright-s {
    margin-left: 8px
}
.m-leftright-s,
.m-right-s {
    margin-right: 8px
}
.m-top-s,
.m-topbtm-s {
    margin-top: 8px
}
.m-btm-s,
.m-topbtm-s {
    margin-bottom: 8px
}
.m-s {
    margin: 8px
}
.m-left-ms,
.m-leftright-ms {
    margin-left: 12px
}
.m-leftright-ms,
.m-right-ms {
    margin-right: 12px
}
.m-top-ms,
.m-topbtm-ms {
    margin-top: 12px
}
.m-btm-ms,
.m-topbtm-ms {
    margin-bottom: 12px
}
.m-ms {
    margin: 12px
}
.m-left-m,
.m-leftright-m {
    margin-left: 16px
}
.m-leftright-m,
.m-right-m {
    margin-right: 16px
}
.m-top-m,
.m-topbtm-m {
    margin-top: 16px
}
.m-btm-m,
.m-topbtm-m {
    margin-bottom: 16px
}
.m-m {
    margin: 16px
}
.m-left-l,
.m-leftright-l {
    margin-left: 24px
}
.m-leftright-l,
.m-right-l {
    margin-right: 24px
}
.m-top-l,
.m-topbtm-l {
    margin-top: 24px
}
.m-btm-l,
.m-topbtm-l {
    margin-bottom: 24px
}
.m-l {
    margin: 24px
}
.m-left-xl,
.m-leftright-xl {
    margin-left: 32px
}
.m-leftright-xl,
.m-right-xl {
    margin-right: 32px
}
.m-top-xl,
.m-topbtm-xl {
    margin-top: 32px
}
.m-btm-xl,
.m-topbtm-xl {
    margin-bottom: 32px
}
.m-xl {
    margin: 32px
}
.m-left-xxl,
.m-leftright-xxl {
    margin-left: 48px
}
.m-leftright-xxl,
.m-right-xxl {
    margin-right: 48px
}
.m-top-xxl,
.m-topbtm-xxl {
    margin-top: 48px
}
.m-btm-xxl,
.m-topbtm-xxl {
    margin-bottom: 48px
}
.m-xxl {
    margin: 48px
}
.fancy-container .justify-right,
.m-left-auto {
    margin-left: auto
}
.fancy-container .justify-left,
.m-right-auto {
    margin-right: auto
}
.fancy-container.vertical {
    display: flex;
    flex-direction: column
}
.fancy-container.horizontal {
    display: flex;
    flex-direction: row
}
.fancy-container.horizontal.spaced {
    justify-content: space-between
}
.fancy-container.inline {
    display: inline-flex
}
.fancy-container.justify-right {
    justify-content: flex-end
}
.fancy-container.justify-center {
    justify-content: center
}
.fancy-container.justify-left {
    justify-content: flex-start
}
.fancy-container.justify-space-between {
    justify-content: space-between
}
.fancy-container.align-right {
    align-items: flex-end
}
.fancy-container.align-center {
    align-items: center
}
.fancy-container.align-left {
    align-items: flex-start
}
.fancy-rounded {
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px
}
.fancy-rounded.typeAhead {
    border-top-right-radius: 16px!important;
    border-bottom-left-radius: 16px!important
}
.fancy-rounded__small,
.fancy-rounded__small>select {
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px
}
.fancy-rounded__regular,
.fancy-rounded__regular>select {
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px
}
.fancy-rounded__medium,
.fancy-rounded__medium>select {
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px
}
.fancy-rounded__large,
.fancy-rounded__large>select {
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px
}
.hidden {
    display: none!important
}
.sticky {
    position: -webkit-sticky;
    position: sticky
}
.master-container {
    width: 1200px;
    margin: 0 auto
}
@media screen and (max-width: 1200px) {
    .master-container {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        padding-left: 48px;
        padding-right: 48px
    }
}
@media screen and (max-width: 767px) {
    .master-container {
        padding-left: 16px;
        padding-right: 16px
    }
}
.rail-container .rail-right .section .section-item>div {
    margin-bottom: 48px
}
@media (min-width: 992px) {
    .rail-container {
        flex-direction: row;
        padding-top: 48px
    }
    .rail-container .rail-left {
        float: left;
        width: calc(100% - 300px);
        padding-right: 64px;
        min-height: 740px
    }
    .rail-container .rail-right {
        display: block;
        width: 300px
    }
}
#topLeaderBoard {
    display: none;
    position: fixed;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    z-index: 99;
    align-items: center
}
#topLeaderBoard>img {
    height: 50px;
    width: 320px
}
#topLeaderBoard>svg {
    position: absolute;
    height: 24px;
    width: 24px;
    right: 10px;
    top: -10px;
    background-color: #fff;
    border-radius: 1000px;
    cursor: pointer
}
@media (min-width: 767px) {
    .top-page-pad {
        padding-top: 48px
    }
    .bottom-page-pad {
        padding-bottom: 48px
    }
    #topLeaderBoard {
        display: flex;
        position: relative;
        background-color: #fff
    }
    #topLeaderBoard>div {
        margin: 0 0 10px
    }
    #topLeaderBoard svg,
    #topLeaderBoard>img {
        display: none
    }
}
.main-navigation {
    height: 40px;
    width: 100%;
    display: flex;
    align-content: center;
    background: #0190ad;
    background: -moz-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #67C998 90%, #67C998 100%);
    background: -webkit-gradient(left top, right top, color-stop(0, #007e98), color-stop(30%, #06afcb), color-stop(45%, #06afcb), color-stop(90%, #67C998), color-stop(100%, #67C998));
    background: -webkit-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #67C998 90%, #67C998 100%);
    background: -o-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #67C998 90%, #67C998 100%);
    background: -ms-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #67C998 90%, #67C998 100%);
    background: linear-gradient(to right, #007e98 0, #06afcb 30%, #06afcb 45%, #67C998 90%, #67C998 100%)
}
.main-navigation.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100
}
.main-navigation .master-container {
    display: flex;
    align-items: center
}
.main-navigation .master-container.simple .logo-wrapper {
    display: flex;
    height: 22px
}
.main-navigation .master-container.simple .logo-wrapper .logo {
    max-height: 28px;
    max-width: 170px
}
@media (min-width: 767px) {
    .main-navigation {
        height: 64px
    }
    .main-navigation .master-container.simple .logo-wrapper {
        height: 30px
    }
    .main-navigation .master-container.simple .logo-wrapper .logo {
        max-height: 40px;
        max-width: 210px
    }
}
.blue-link,
.blue-link:active,
.blue-link:focus,
.blue-link:hover {
    color: #0095bc
}
.black,
.black:active,
.black:focus,
.black:hover {
    color: #fff
}
.white,
.white:active,
.white:focus,
.white:hover {
    color: #fff
}
.light-grey,
.light-grey:active,
.light-grey:focus,
.light-grey:hover {
    color: #ddd
}
.grey,
.grey:active,
.grey:focus,
.grey:hover {
    color: #777
}
.red,
.red:active,
.red:focus,
.red:hover {
    color: #c00202
}
.super-green,
.super-green:active,
.super-green:focus,
.super-green:hover {
    color: #2c4446
}
.home-green,
.home-green:active,
.home-green:focus,
.home-green:hover {
    color: #25a497
}
.bold {
    font-weight: 700
}
.semi-bold {
    font-weight: 600
}
.light,
.light-1 {
    font-weight: 200
}
.regular {
    font-weight: 400
}
a.underline,
a:hover {
    text-decoration: underline
}
a.invisible:hover {
    text-decoration: none
}
.cursor-pointer {
    cursor: pointer
}
.text {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    word-break: break-word
}
.text.body {
    font-size: 18px;
    line-height: 28px
}
.text.body.enlarge {
    font-size: 19px
}
.text.body div,
.text.body ol,
.text.body p,
.text.body ul {
    margin-bottom: 24px
}
.text.body div.MsoNormal:last-child,
.text.body div.adplaceholder,
.text.body div.clearfix,
.text.body div.ebook-article-plcholder,
.text.body ol.MsoNormal:last-child,
.text.body ol.adplaceholder,
.text.body ol.clearfix,
.text.body ol.ebook-article-plcholder,
.text.body p.MsoNormal:last-child,
.text.body p.adplaceholder,
.text.body p.clearfix,
.text.body p.ebook-article-plcholder,
.text.body ul.MsoNormal:last-child,
.text.body ul.adplaceholder,
.text.body ul.clearfix,
.text.body ul.ebook-article-plcholder {
    margin-bottom: 0
}
.text.body.article-body h2 {
    margin-bottom: 16px;
    font-size: 26px;
    line-height: 28px;
    margin-top: 8px;
    display: inline-block
}
.text.body.article-body strong {
    font-weight: 700
}
.text.body.article-body a {
    color: #0095bc;
    font-weight: 600
}
.text.body.article-body ol,
.text.body.article-body ul {
    margin-bottom: 24px;
    margin-top: 0;
    list-style: none
}
.text.body.article-body ol ul,
.text.body.article-body ol>li:not(:last-child),
.text.body.article-body ul ol,
.text.body.article-body ul>li:not(:last-child) {
    margin-bottom: 8px
}
.text.body.article-body ol>li,
.text.body.article-body ul>li {
    display: table
}
.text.body.article-body ol>li:before,
.text.body.article-body ul>li:before {
    display: table-cell;
    padding-right: 8px
}
.text.body.article-body ul {
    padding-left: 24px
}
.text.body.article-body ul>li:before {
    content: "•";
    color: #0095bc
}
.text.body.article-body ol {
    padding-left: 16px;
    counter-reset: my-counter
}
.text.body.article-body ol>li:before {
    content: counter(my-counter) ".";
    counter-increment: my-counter;
    width: 40px;
    text-align: right
}
.text.body.article-body h3 {
    font-size: 21px;
    line-height: 24px;
    margin-bottom: 8px
}
.text.body.article-body table {
    margin-bottom: 24px;
    border-collapse: collapse;
    width: 100%!important;
    font-size: 16px;
    line-height: 20px
}
.text.body.article-body table tbody tr td>*,
.text.body.article-body table thead tr td>* {
    margin: 0;
    padding: 0
}
.text.body.article-body table.questionnaire thead tr td {
    padding: 16px;
    background-color: #eef5f6;
    border-bottom: 1px solid rgba(0, 186, 197, .4);
    border-top: 1px solid rgba(0, 186, 197, .4)
}
.text.body.article-body table thead tr td {
    padding: 0
}
.text.body.article-body table tbody tr:first-child {
    border-top: 1px solid rgba(0, 186, 197, .4)
}
.text.body.article-body table tbody tr.subheading {
    background-color: #eef5f6
}
.text.body.article-body table tbody tr.subheading .td {
    font-weight: 700
}
.text.body.article-body table tbody tr td.statename {
    background-color: #eef5f6;
    font-weight: 700
}
.text.body.article-body .disclaimer,
.text.body.article-body .sources {
    font-size: 12px;
    line-height: 16px;
    color: #777;
    margin-bottom: 8px
}
.text.body.article-body .disclaimer:last-child,
.text.body.article-body .sources:last-child {
    margin-bottom: 24px
}
.text.body.article-body blockquote {
    border-left: solid #eee 16px;
    padding-left: 24px;
    display: inline-block;
    margin: 16px 0 40px
}
.text.body.article-body blockquote>p {
    margin-bottom: 0
}
.text.body.article-body .adplaceholder {
    display: flex;
    justify-content: center;
    align-items: center
}
.text.body.article-body .adplaceholder>div>div {
    margin-bottom: 0!important
}
.text.body.article-body hr.bottom,
.text.body.article-body hr.top {
    border-top: 1px solid #0095bc
}
.text.body.article-body hr.top {
    margin-bottom: 24px;
    margin-top: 32px
}
.text.body.article-body hr.bottom {
    margin-bottom: 32px;
    margin-top: 24px
}
.text.bodyNeutral {
    font-size: 18px;
    line-height: 28px
}
.text.bodyNeutral.enlarge {
    font-size: 19px
}
.text.medium {
    font-size: 18px;
    line-height: 24px
}
.text.small {
    font-size: 16px;
    line-height: 20px
}
.text.small_22 {
    font-size: 16px;
    line-height: 22px
}
.text.xsmall {
    font-size: 14px;
    line-height: 16px
}
.text.xxsmall {
    font-size: 12px;
    line-height: 16px
}
.text.justify-left {
    text-align: left
}
.text.justify-center {
    text-align: center
}
.text.justify-right {
    text-align: right
}
ol.arrows-list,
ol.fancyNumberList,
ol.fancyQuestionList,
ol.standard-list,
ul.arrows-list,
ul.fancyNumberList,
ul.fancyQuestionList,
ul.standard-list {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none
}
ol.arrows-list li,
ol.fancyNumberList li,
ol.fancyQuestionList li,
ol.standard-list li,
ul.arrows-list li,
ul.fancyNumberList li,
ul.fancyQuestionList li,
ul.standard-list li {
    display: table;
    word-break: break-word
}
ol.arrows-list li:not(:last-child),
ol.fancyNumberList li:not(:last-child),
ol.fancyQuestionList li:not(:last-child),
ol.standard-list li:not(:last-child),
ul.arrows-list li:not(:last-child),
ul.fancyNumberList li:not(:last-child),
ul.fancyQuestionList li:not(:last-child),
ul.standard-list li:not(:last-child) {
    margin-bottom: 8px
}
ol.arrows-list li:before,
ol.fancyNumberList li:before,
ol.fancyQuestionList li:before,
ol.standard-list li:before,
ul.arrows-list li:before,
ul.fancyNumberList li:before,
ul.fancyQuestionList li:before,
ul.standard-list li:before {
    display: table-cell;
    width: 24px
}
ul.unstyled {
    margin: 0;
    padding: 0;
    list-style: none
}
ul.fancyNumberList li:not(:last-child),
ul.fancyQuestionList li:not(:last-child) {
    margin-bottom: 24px
}
ul.standard-list {
    padding-left: 24px
}
ul.standard-list li:before {
    content: "•";
    color: #0095bc
}
ul.arrows-list {
    padding-left: 0
}
ul.arrows-list li {
    position: relative;
    padding-left: 24px
}
ul.arrows-list li>*,
ul.fancyNumberList {
    padding-left: 0
}
ul.arrows-list li:before {
    content: "∟";
    transform: rotate(225deg);
    color: #fff;
    height: 16px;
    width: 16px;
    position: absolute;
    left: -8px;
    top: 9px;
    font-size: 16px
}
ul.fancyNumberList li:before,
ul.fancyQuestionList li:before {
    font-size: 21px;
    font-weight: 200;
    width: 36px;
    text-align: center;
    vertical-align: top;
    padding-top: 0;
    color: #999;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
ul.fancyNumberList li {
    counter-increment: fancy-counter
}
ul.fancyNumberList li>* {
    padding-left: 8px;
    display: block
}
ul.fancyNumberList li:before {
    content: counter(fancy-counter) ". "
}
ul.fancyQuestionList {
    padding-left: 0
}
ul.fancyQuestionList li>* {
    padding-left: 8px;
    display: block
}
ul.fancyQuestionList li:before {
    content: "Q. "
}
ul.blocklist {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 560px
}
ul.blocklist>li {
    width: 25%
}
@media (min-width: 767px) {
    ul.blocklist {
        height: 280px
    }
    ul.blocklist>li {
        width: 12.5%
    }
}
ol.standard-list {
    padding-left: 16px;
    counter-reset: my-counter
}
ol.standard-list li:before {
    content: counter(my-counter) ".";
    counter-increment: my-counter;
    width: 40px;
    text-align: right
}
table.stripe-table tbody tr:nth-child(2n) {
    background-color: #eef5f6
}
table.standard-table {
    border: none
}
table.standard-table.body-middle-align tbody tr td,
table.standard-table.body-middle-align tbody tr th {
    vertical-align: middle
}
.chevron::after,
table tbody tr td,
table tbody tr th {
    vertical-align: top
}
table tbody tr th {
    border-bottom: solid #00b8c5 3px;
    padding: 0 16px 16px;
    text-align: left
}
table tbody tr:nth-child(2n+1) {
    background-color: #fff
}
table tbody tr td {
    border-bottom: 1px solid rgba(0, 186, 197, .4);
    padding: 16px
}
.c-heading {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.c-heading.xl {
    font-size: 36px;
    line-height: 40px
}
.c-heading.xl-m {
    font-size: 36px;
    line-height: 34px
}
.c-heading.large-b {
    font-size: 32px;
    line-height: 36px
}
.c-heading.large {
    font-size: 26px;
    line-height: 28px
}
.c-heading.medium {
    font-size: 21px;
    line-height: 24px
}
.c-heading.medium-l {
    font-size: 21px;
    line-height: 28px
}
.c-heading.justify-left {
    text-align: left
}
.c-heading.justify-center {
    text-align: center
}
.c-heading.justify-right {
    text-align: right
}
.o-heading {
    font-family: 'Kamerik 105', Arial, Helvetica, sans-serif
}
.ac-button,
.ac-field.field-dropdown,
.ac-field.field-text {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.o-heading.xxl {
    font-size: 44px;
    line-height: 46px
}
.o-heading.xl {
    font-size: 40px;
    line-height: 42px
}
.o-heading.large {
    font-size: 36px;
    line-height: 40px
}
.o-heading.medium {
    font-size: 26px;
    line-height: 30px
}
.action-arrow.arrow-down:after,
.action-arrow.arrow-left:before,
.action-arrow.arrow-right:after,
.action-arrow.arrow-up:after {
    content: "∟";
    font-size: .75em;
    display: inline-block;
    text-decoration: none
}
.o-heading.justify-left {
    text-align: left
}
.o-heading.justify-center {
    text-align: center
}
.o-heading.justify-right {
    text-align: right
}
.action-arrow.arrow-right:after {
    transform: rotate(-135deg);
    padding-bottom: .5em;
    padding-left: .5em;
    margin-right: -.25em;
    margin-left: -.25em
}
.action-arrow.arrow-left:before {
    transform: rotate(45deg);
    padding-bottom: .5em;
    padding-right: .5em;
    margin-right: -.25em;
    margin-left: -.25em
}
.action-arrow.arrow-down {
    display: inline-block;
    height: 1.3em
}
.action-arrow.arrow-down:after {
    transform: rotate(-45deg);
    padding-bottom: 1.25em;
    padding-left: 1.25em
}
.action-arrow.arrow-up {
    display: inline-block;
    height: 1.3em
}
.action-arrow.arrow-up:after {
    transform: rotate(135deg);
    padding-bottom: .1em;
    padding-left: .1em;
    margin-left: .5em
}
.chevron {
    white-space: nowrap
}
.chevron::after {
    border-style: solid;
    border-width: .01em .01em 0 0;
    content: '';
    display: inline-block;
    height: .45em;
    left: .15em;
    position: relative;
    top: .15em;
    transform: rotate(-45deg);
    width: .45em
}
.chevron.right:after {
    left: 5px;
    top: 6px;
    transform: rotate(45deg)
}
.ac-radio[type=radio]:checked,
.ac-radio[type=radio]:not(:checked) {
    position: absolute;
    left: -9999px
}
.ac-radio[type=radio]:checked+label,
.ac-radio[type=radio]:not(:checked)+label {
    position: relative;
    padding-left: 32px;
    cursor: pointer;
    display: flex
}
.ac-radio[type=radio]:checked+label:before,
.ac-radio[type=radio]:not(:checked)+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: calc(50% - .53em);
    width: 1em;
    height: 1em;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    border: 1px solid #777
}
.ac-radio.no-borders,
.ac-radio.no-borders[type=radio]:checked+label:before,
.ac-radio.no-borders[type=radio]:disabled:checked+label:before,
.ac-radio.no-borders[type=radio]:disabled:not(:checked)+label:before,
.ac-radio.no-borders[type=radio]:not(:checked)+label:before {
    border: none;
    box-shadow: none
}
.ac-radio[type=radio]:not(:checked)+label:before {
    background: #fff
}
.ac-radio[type=radio]:checked+label:before {
    border: 1px solid #0095bc;
    background: #0095bc
}
.ac-radio.radio-green[type=radio]:checked+label:before {
    border: 1px solid #45b89c;
    background: #45b89c
}
.ac-radio.radio-inverted[type=radio]:checked+label:before {
    background: #fff
}
.ac-radio[type=radio]:checked+label:after,
.ac-radio[type=radio]:not(:checked)+label:after {
    content: '•';
    position: absolute;
    left: 0;
    top: calc(50% - .53em);
    color: #fff!important;
    height: 1em;
    width: 1em;
    transition: all .2s;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center
}
.ac-radio.radio-inverted[type=radio]:checked+label:after,
.ac-radio.radio-inverted[type=radio]:not(:checked)+label:after {
    color: #01667b!important;
    width: .67em;
    height: .67em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.5em;
    text-align: center
}
.ac-radio[type=radio]:not(:checked)+label:after {
    opacity: 0;
    transform: scale(0)
}
.ac-radio[type=radio]:checked+label:after {
    opacity: 1;
    transform: scale(1)
}
.ac-radio[type=radio]:disabled:checked+label:before,
.ac-radio[type=radio]:disabled:not(:checked)+label:before {
    box-shadow: none;
    border-color: #777;
    background-color: #777
}
.ac-radio[type=radio]:disabled+label,
.ac-radio[type=radio]:disabled:checked+label:after {
    color: #777
}
.ac-checkbox[type=checkbox]:checked,
.ac-checkbox[type=checkbox]:not(:checked) {
    position: absolute;
    left: -9999px
}
.ac-checkbox[type=checkbox]:checked+label,
.ac-checkbox[type=checkbox]:not(:checked)+label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
    display: flex;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.ac-checkbox[type=checkbox]:checked+label:before,
.ac-checkbox[type=checkbox]:not(:checked)+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1)
}
.ac-checkbox[type=checkbox]:not(:checked)+label:before {
    border: 1px solid #777;
    background: #fff
}
.ac-checkbox.no-borders[type=checkbox]:not(:checked)+label:before {
    border: none!important;
    box-shadow: none!important
}
.ac-checkbox[type=checkbox]:checked+label:before {
    border: 1px solid #01667b;
    background: #01667b;
    height: 17px;
    width: 17px
}
.ac-checkbox.checkbox-green[type=checkbox]:checked+label:before {
    border: 1px solid #45b89c;
    background: #45b89c
}
.ac-checkbox.checkbox-blue-link[type=checkbox]:checked+label:before {
    border: 1px solid #0095bc;
    background: #0095bc
}
.ac-checkbox.no-borders[type=checkbox]:checked+label:before {
    border: none!important;
    box-shadow: none!important
}
.ac-checkbox[type=checkbox]:focus+label:before {
    box-shadow: 0 0 0 1px #01667b
}
.ac-checkbox[type=checkbox]:checked+label:after,
.ac-checkbox[type=checkbox]:not(:checked)+label:after {
    content: '\2713';
    font-weight: 700;
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: .8em;
    line-height: .8;
    color: #fff!important;
    transition: all .2s
}
.ac-checkbox[type=checkbox]:not(:checked)+label:after {
    opacity: 0;
    transform: scale(0)
}
.ac-checkbox[type=checkbox]:checked+label:after {
    opacity: 1;
    transform: scale(1)
}
.ac-checkbox[type=checkbox]:disabled:checked+label:before,
.ac-checkbox[type=checkbox]:disabled:not(:checked)+label:before {
    box-shadow: none;
    border-color: #777;
    background-color: #777
}
.ac-checkbox[type=checkbox]:disabled:checked+label:after {
    color: #777
}
.ac-checkbox[type=checkbox]:disabled+label {
    color: #ddd
}
input:focus,
select:focus {
    border-color: #80bdff!important;
    outline: 0;
    box-shadow: inset 0 0 0 2px rgba(0, 135, 255, .5)
}
.ac-button {
    height: 40px;
    line-height: 40px;
    padding: 0 24px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    opacity: 1;
    transition: .3s;
    font-size: 18px;
    font-weight: 600;
    display: inline-flex;
    white-space: nowrap
}
.ac-button:hover {
    opacity: .7;
    text-decoration: none
}
.ac-button:active {
    opacity: 1;
    text-decoration: none
}
.ac-button.small {
    height: 32px;
    line-height: 32px;
    padding: 0 16px;
    font-size: 16px
}
.ac-button.xsmall {
    height: 20px;
    line-height: 21px;
    padding: 0 8px;
    font-size: 12px
}
.ac-button.button-green {
    background-color: #45b89c;
    color: #fff
}
.ac-button.button-blue {
    background-color: #01667b;
    color: #fff
}
.ac-button.button-nav-blue {
    background-color: #007e98;
    color: #007e98
}
.ac-button.button-follow {
    background-color: #0095bc;
    color: #fff
}
.ac-button.button-dark-green {
    background-color: #327176;
    color: #fff
}
.ac-button.button-light-grey {
    background-color: #ddd;
    color: #0095bc
}
.ac-button.button-grey {
    background-color: #ddd;
    color: #777
}
.ac-button.button-lightblue {
    background-color: #E1EFEF;
    color: #2c4446;
    height: 36px;
    font-size: 16px;
    font-weight: 400;
    padding-left: 16px;
    padding-right: 16px;
    line-height: 36px
}
.ac-button.join-input-left {
    margin-left: -24px;
    z-index: 1
}
.ac-button.join-input-left:hover {
    opacity: 1
}
select::-ms-expand {
    display: none
}
.ac-field~.error {
    padding-top: 4px;
    margin-bottom: 0;
    box-shadow: none
}
.ac-field.field-dropdown select,
.ac-field.field-text {
    -webkit-appearance: none;
    padding: 0 16px
}
.ac-field~.error~.tt-menu {
    margin-top: -23px
}
.ac-field.field-dropdown.error,
.ac-field.field-text.error {
    background-color: #f2dede!important;
    border: 1px solid #a94442!important
}
.ac-field.field-dropdown,
.ac-field.field-text {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    display: block;
    width: 100%;
    background-color: #fff;
    border: none;
    outline: 0
}
.ac-field.field-dropdown:-webkit-autofill,
.ac-field.field-text:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset
}
.ac-field.field-dropdown.field-grey,
.ac-field.field-text.field-grey {
    background-color: #E1EFEF
}
.ac-field.field-dropdown.field-grey:-webkit-autofill,
.ac-field.field-text.field-grey:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #E1EFEF inset
}
.ac-field.field-dropdown.field-blue,
.ac-field.field-text.field-blue {
    background-color: #e5f1f1
}
.ac-field.field-dropdown.field-blue:-webkit-autofill,
.ac-field.field-text.field-blue:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #e5f1f1 inset
}
.ac-field.field-text.field-text-pointer {
    cursor: pointer
}
.ac-field.field-dropdown {
    position: relative
}
.ac-field.field-dropdown:after {
    content: ' ';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOS42IDExLjQ4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6Izg4ODtzdHJva2U6Izg4ODtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmljb24tZHJvcGRvd25hcnJvdzwvdGl0bGU+PGcgaWQ9IkxheWVyXzkiIGRhdGEtbmFtZT0iTGF5ZXIgOSI+PHBhdGggaWQ9ImFycl9jb3B5XzIiIGRhdGEtbmFtZT0iYXJyIGNvcHkgMiIgY2xhc3M9ImNscy0xIiBkPSJNMjcuNiwxMC40MiwxNSwxOC40MmwtMTIuNTYtOEwxLDExLjc5bDE0LDguODQsMTQtOC44NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIgLTkuNzQpIi8+PC9nPjwvc3ZnPg==);
    color: #888;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    right: 2px;
    top: 17px;
    position: absolute;
    pointer-events: none;
    height: 19px;
    width: 36px;
    background-size: 60%;
    background-repeat: no-repeat;
    transform: rotate(0)
}
.ac-field.field-dropdown select,
.ac-field.field-textarea {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 18px;
    display: block;
    width: 100%
}
.ac-field.field-dropdown select {
    -moz-appearance: none;
    appearance: none;
    height: 40px;
    color: #fff;
    background-color: #fff;
    background-image: none;
    -ms-word-break: normal;
    word-break: normal;
    border: none
}
.ac-field.field-dropdown select.error {
    background-color: #f2dede!important;
    border: 1px solid #a94442!important
}
.ac-field.field-textarea {
    padding: 16px;
    background-color: #fff;
    border: none;
    outline: 0;
    resize: none
}
.textarea-characterCount:before,
.twitter-typeahead .tt-menu .tt-suggestion {
    font-size: 14px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.ac-field::-webkit-input-placeholder {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    color: #777;
    font-weight: 300;
    opacity: 1
}
.ac-field::-moz-placeholder {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    color: #777;
    font-weight: 300;
    opacity: 1
}
.ac-field:-ms-input-placeholder {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    color: #777;
    font-weight: 300;
    opacity: 1
}
.ac-field:-moz-placeholder {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    color: #777;
    font-weight: 300;
    opacity: 1
}
.ac-field.input-validation-error {
    border: 1px solid #c00202
}
.ac-field.join-button-right {
    padding-right: 32px
}
.textarea-characterCount {
    position: relative;
    background-color: #fff;
    padding-bottom: 24px
}
.textarea-characterCount:before {
    content: attr(counting);
    position: absolute;
    color: #777;
    right: 16px;
    bottom: 8px
}
.twitter-typeahead .tt-menu .tt-suggestion {
    color: #fff;
    padding: 5px 15px;
    background-color: #fff;
    text-align: left;
    cursor: pointer
}
.input-field {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center
}
.input-field .field1 {
    margin-bottom: 16px
}
@media (min-width: 767px) {
    .input-field {
        flex-direction: row
    }
    .input-field .field1,
    .input-field .field2 {
        display: block
    }
    .input-field .ac-button:hover {
        opacity: 1
    }
    .input-field .field1 {
        flex: 2 0 0;
        margin-bottom: 0
    }
    .input-field .field1 .ac-field.field-text {
        padding-right: 32px
    }
    .input-field .field2 {
        margin-left: -24px
    }
}
.characterCount-control {
    position: relative;
    background-color: #fff;
    padding-bottom: 32px;
    border-bottom-left-radius: 16px;
    border-top-right-radius: 16px
}
.characterCount-control textarea {
    padding-bottom: 24px;
    height: 100%;
    resize: none
}
.characterCount-control .count {
    position: absolute;
    right: 16px;
    bottom: 12px
}
.ac-checkbox-square[type=checkbox]:checked,
.ac-checkbox-square[type=checkbox]:not(:checked) {
    position: absolute;
    left: -9999px
}
.ac-checkbox-square[type=checkbox]:checked+label,
.ac-checkbox-square[type=checkbox]:not(:checked)+label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
    display: flex;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.fancy-steppanel,
.fancy-steppanel.step-one .step-number,
.form.form-blue .header {
    font-family: 'Kamerik 105', Arial, Helvetica, sans-serif
}
.ac-checkbox-square[type=checkbox]:checked+label:before,
.ac-checkbox-square[type=checkbox]:not(:checked)+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    width: 16px;
    height: 16px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: none
}
.ac-checkbox-square[type=checkbox]:not(:checked)+label:before {
    border: 1px solid #999;
    background: #fff
}
.ac-checkbox-square.no-borders[type=checkbox]:not(:checked)+label:before {
    border: none!important;
    box-shadow: none!important
}
.ac-checkbox-square[type=checkbox]:checked+label:before {
    border: 1px solid #01667b;
    background: #01667b;
    height: 17px;
    width: 17px
}
.ac-checkbox-square.checkbox-green[type=checkbox]:checked+label:before {
    border: 1px solid #45b89c;
    background: #45b89c
}
.ac-checkbox-square.checkbox-blue-link[type=checkbox]:checked+label:before {
    border: 1px solid #0095bc;
    background: #0095bc
}
.ac-checkbox-square.no-borders[type=checkbox]:checked+label:before {
    border: none!important;
    box-shadow: none!important
}
.ac-checkbox-square[type=checkbox]:focus+label:before {
    box-shadow: 0 0 0 1px #01667b
}
.ac-checkbox-square[type=checkbox]:checked+label:after,
.ac-checkbox-square[type=checkbox]:not(:checked)+label:after {
    content: '\2713';
    font-weight: 700;
    position: absolute;
    top: 8px;
    left: 4px;
    font-size: .8em;
    line-height: .8;
    color: #fff!important;
    transition: all .2s
}
.ac-checkbox-square[type=checkbox]:not(:checked)+label:after {
    opacity: 0;
    transform: scale(0)
}
.ac-checkbox-square[type=checkbox]:checked+label:after {
    opacity: 1;
    transform: scale(1)
}
.ac-checkbox-square[type=checkbox]:disabled:checked+label:before,
.ac-checkbox-square[type=checkbox]:disabled:not(:checked)+label:before {
    box-shadow: none;
    border-color: #999;
    background-color: #999
}
.ac-checkbox-square[type=checkbox]:disabled:checked+label:after {
    color: #999
}
.ac-checkbox-square[type=checkbox]:disabled+label {
    color: #ddd
}
.main-footer {
    background-color: #5c707e;
    width: 100%
}
.form label {
    display: block
}
.form.form-blue {
    background: #007791;
    background: -webkit-linear-gradient(top, #007791 0, #13a4b5 25%, #1fbac2 80%, #1fbac2 100%);
    background: -o-linear-gradient(top, #007791 0, #13a4b5 25%, #1fbac2 80%, #1fbac2 100%);
    background: -ms-linear-gradient(top, #007791 0, #13a4b5 25%, #1fbac2 80%, #1fbac2 100%);
    background: -moz-linear-gradient(top, #007791 0, #13a4b5 25%, #1fbac2 80%, #1fbac2 100%);
    background: linear-gradient(to bottom, #007791 0, #13a4b5 25%, #1fbac2 80%, #1fbac2 100%)
}
.form.form-blue.form-resp {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -16px;
    margin-right: -16px
}
.form.form-blue .disclaimer {
    color: #fff
}
.form.form-blue .disclaimer>a {
    color: #fff;
    text-decoration: underline
}
.form.form-blue .header.senior-living {
    position: relative
}
.form.form-blue .header.senior-living .big {
    line-height: 34px;
    font-size: 28px
}
.form.form-blue .header.senior-living .small {
    position: relative;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 24px
}
.form.form-blue .header.senior-living .small:after {
    position: absolute;
    content: "&";
    font-weight: 200;
    font-size: 40px;
    line-height: 32px;
    top: -26px;
    display: inline-block
}
.form.form-blue .header .big {
    font-weight: 700;
    font-size: 26px
}
.form.form-blue .header .small {
    font-weight: 200;
    font-size: 21px
}
.form.form-blue .thankyou-message a {
    color: #fff;
    text-decoration: underline
}
.form.form-funcem {
    background: #e1efef;
    border-top-right-radius: 0
}
.form.form-funcem .header-top {
    background-color: #01667B;
    margin-left: -24px;
    margin-right: -24px
}
.form.form-funcem .disclaimer.black a {
    color: #fff;
    text-decoration: underline
}
.form.form-funcem .header-text {
    max-width: 150px;
    margin-left: 14px
}
.form .field-validation-error {
    display: block
}
.form .phone-number,
.form .twitter-typeahead {
    width: 100%
}
@media (min-width: 767px) {
    .form.form-blue.form-resp {
        margin-right: 0;
        margin-left: 0;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px
    }
}
@media (max-width: 992px) and (min-width: 767px) {
    .form.form-blue.form-resp {
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
        width: calc(100% - 96px);
        margin: 0 auto 40px;
        padding-right: 48px;
        padding-left: 48px
    }
    .form.form-funcem {
        padding-right: 48px;
        padding-left: 48px;
        width: calc(100% - 135px);
        margin-left: auto;
        margin-right: auto
    }
    .form.form-funcem .header-top {
        margin-right: -48px;
        margin-left: -48px
    }
    .form.form-funcem .header-text {
        max-width: 200px
    }
}
.fancy-steppanel {
    max-width: 292px;
    min-height: 140px;
    margin-bottom: 10px;
    padding: 24px 50px 24px 80px;
    text-align: left;
    margin-right: 24px
}
.contentMaker .form-footer,
footer.footer .bottom .text {
    text-align: center
}
.fancy-steppanel .body {
    line-height: 24px
}
.fancy-steppanel.step-one {
    background-color: #d0eff1;
    position: relative;
    padding-right: 48px;
    max-width: 292px
}
.fancy-steppanel.step-one .step-number {
    font-size: 120px;
    color: #00aacd;
    line-height: 120px;
    background-color: #fff;
    position: absolute;
    width: 44px;
    height: 104px;
    top: -10px;
    left: -14px;
    font-weight: 700;
    text-shadow: 4px 0 #fff, 0 4px #fff, -4px 0 #fff, 0 -4px #fff, 4px 4px #fff, -4px -4px #fff, 4px -4px #fff, -4px 4px #fff
}
.fancy-steppanel.step-three .step-number,
.fancy-steppanel.step-two .step-number {
    font-family: 'Kamerik 105', Arial, Helvetica, sans-serif;
    font-size: 120px;
    line-height: 120px;
    left: -7px;
    text-shadow: 4px 0 #fff, 0 4px #fff, -4px 0 #fff, 0 -4px #fff, 4px 4px #fff, -4px -4px #fff, 4px -4px #fff, -4px 4px #fff;
    font-weight: 700
}
.fancy-steppanel.step-two {
    background-color: #dcf3ed;
    position: relative;
    max-width: 292px
}
.fancy-steppanel.step-two .step-number {
    color: #4bc3aa;
    background-color: #fff;
    position: absolute;
    width: 44px;
    height: 80px;
    top: -8px
}
.fancy-steppanel.step-three {
    background-color: #cef0df;
    position: relative;
    max-width: 292px
}
.fancy-steppanel.step-three .step-number {
    color: #66c99a;
    background-color: #fff;
    position: absolute;
    width: 47px;
    height: 82px;
    top: -10px
}
.list-step-number .step-item .step-number {
    color: #4ec2a6;
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    width: 30px
}
footer.footer {
    background-color: #033668;
    color: #fff;
    display: inline-block;
    width: 100%
}
footer.footer .row {
    padding-bottom: 48px
}
footer.footer .row .col {
    width: 100%;
    display: block;
    vertical-align: top
}
footer.footer .row .col:not(:last-child) {
    margin-bottom: 32px
}
footer.footer .row .col ul li:not(:last-child) {
    padding-bottom: 16px
}
footer.footer .row .col ul li a {
    color: #ffff
}
footer.footer .row .col ul li a.actionWidget__medium:not(:last-child) {
    margin-right: 16px
}
footer.footer .logo {
    display: inline-block
}
footer.footer .logo svg {
    height: 26px;
    width: 148px
}
footer.footer .bottom {
    background-color: #5c707e
}
footer.footer .bottom .mission {
    margin-bottom: 16px
}
footer.footer .bottom a {
    text-decoration: underline
}
@media (min-width: 767px) {
    footer.footer .row .col {
        width: 32.5%;
        display: inline-block
    }
    footer.footer .row .col:not(:last-child) {
        margin-bottom: 0
    }
    footer.footer .row .col:not(:first-child) ul {
        padding-left: 24px;
        border-left: solid 1px #ccc
    }
    footer.footer .row .col:not(:last-child) ul {
        padding-right: 24px
    }
    footer.footer .bottom .mission {
        margin-bottom: 8px
    }
}
.progress {
    background-color: #ddd;
    height: 24px;
    border-radius: 16px
}
.progress .progress-succes {
    position: relative;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    height: 100%;
    background-color: #66c99a
}
.progress .progress-succes .text {
    text-align: center;
    color: #fff;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 24px
}
.badge.badge-large .graphic-circle {
    height: 112px;
    width: 112px
}
.badge.badge-sm .graphic-circle {
    height: 48px;
    width: 48px
}
.badge.badge-sm .badge-wrapper .badge-body .small,
.badge.badge-sm .badge-wrapper .badge-body .xsmall {
    line-height: 20px
}
.badge .badge-wrapper {
    display: flex
}
.badge .badge-wrapper.vertical {
    flex-direction: column
}
.badge .badge-wrapper .badge-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px
}
.badge .badge-wrapper .badge-body .follow-button {
    margin-top: 4px
}
.badge .badge-wrapper .badge-body .small,
.badge .badge-wrapper .badge-body .xsmall {
    line-height: 18px
}
.badge .badge-bio {
    display: flex;
    flex-direction: column;
    padding-left: 80px
}
.bubble.bubble-leftbtm:before,
.bubble.bubble-lefttop:before,
.bubble.bubble-rightbtm:before,
.bubble.bubble-righttop:before {
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 1000px;
    background-color: inherit;
    border-color: inherit
}
.bubble {
    background-color: #0095bc;
    border-radius: 50%;
    height: 360px;
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.bubble>* {
    max-width: 76%
}
.bubble.orange {
    background-color: #ef955e
}
.bubble.bubble-leftbtm:before {
    border-bottom-left-radius: 0;
    z-index: -1;
    left: 12%;
    bottom: 12%
}
.bubble.bubble-rightbtm:before {
    border-bottom-right-radius: 0;
    z-index: -1;
    right: 12%;
    bottom: 12%
}
.bubble.bubble-lefttop:before {
    border-top-left-radius: 0;
    z-index: -1;
    left: 12%;
    top: 12%
}
.bubble.bubble-righttop:before {
    border-top-right-radius: 0;
    z-index: -1;
    right: 12%;
    top: 12%
}
.graphic-circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative
}
.actionWidget__badge,
.actionWidget__medium,
.actionWidget__small,
.actionWidget__smallv2 {
    display: inline-flex;
    cursor: pointer
}
.graphic-circle .graphic-circle-container {
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0
}
.graphic-circle .graphic-circle-container.object-fit {
    background-size: cover!important;
    background-position: center center!important
}
.graphic-circle .graphic-circle-container.object-fit-wrapper img,
.graphic-circle .graphic-circle-container.object-fit-wrapper object {
    object-fit: cover;
    width: 100%;
    height: 100%
}
.graphic-circle>img,
.graphic-circle>object {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0
}
.graphic-circle img,
.graphic-circle object,
.graphic-circle svg {
    border-radius: 1000px
}
.graphic-circle svg {
    height: calc(100% - 2px);
    width: calc(100% - 2px)
}
.graphic-circle .initials {
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Kamerik 105', Arial, Helvetica, sans-serif;
    font-size: 26px;
    font-weight: 200;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.navbar .sticky .dropdown-menu .menu.left ul.links,
.navbar .sticky .dropdown-menu .menu.right .mytopics .topicstitle,
.navbar .sticky>div.wrapper>.right .login-action a .label,
.navbar .sticky>div.wrapper>.right .shortcut-links ul {
    font-weight: 600;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.actionWidget__small svg {
    height: 16px;
    width: 16px
}
.actionWidget__small .action-text {
    font-size: 14px;
    line-height: 17px;
    padding-left: 8px
}
.actionWidget__smallv2 svg {
    height: 18px;
    width: 18px
}
.actionWidget__smallv2 .action-text {
    font-size: 14px;
    line-height: 20px;
    padding-left: 8px
}
.actionWidget__medium svg {
    height: 24px;
    width: 24px
}
.actionWidget__medium .action-text {
    font-size: 16px;
    line-height: 24px;
    padding-left: 8px
}
.actionWidget__badge .action-text {
    font-size: 14px;
    line-height: 17px
}
.pointer {
    position: relative
}
.pointer:before {
    content: "";
    display: block;
    border-style: solid;
    border-width: 10px 0 15px 25px;
    border-color: #E1EFEF;
    transform: rotate(-54deg);
    position: absolute;
    top: -9px;
    left: 24px
}
.commentMaker {
    background-color: #E1EFEF;
    position: relative;
    margin-left: -16px;
    margin-right: -16px
}
.commentMaker .close {
    position: absolute;
    right: 9px;
    top: 7px;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer
}
.commentMaker .snowcontainer {
    margin-bottom: 16px
}
.commentMaker .textarea-characterCount {
    margin-bottom: 24px
}
.commentMaker .textarea-characterCount~.error {
    margin-bottom: 16px;
    margin-top: -16px
}
@media (min-width: 767px) {
    .commentMaker {
        margin-left: 0;
        margin-right: 0;
        border-bottom-left-radius: 16px
    }
}
.contentMaker {
    background-color: #36bcd5;
    position: relative;
    margin-left: -16px;
    margin-right: -16px;
    padding: 32px 16px;
    border-radius: 0
}
.contentMaker .close {
    position: absolute;
    right: 16px;
    top: 12px;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer
}
.contentMaker .snowcontainer,
.contentMaker .textarea-characterCount {
    margin-bottom: 16px
}
.contentMaker .textarea-characterCount+label.error {
    margin-top: -12px;
    margin-bottom: 12px
}
.contentMaker .formWrapper .header {
    margin-bottom: 16px
}
.contentMaker .formWrapper label.error {
    color: #fff
}
@media (min-width: 767px) {
    .contentMaker {
        padding: 24px 48px 32px;
        margin: 0;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px
    }
    .contentMaker .form-footer {
        text-align: right
    }
    .contentMaker .close {
        right: 21px;
        top: 17px
    }
}
.editor .ql-container.ql-snow {
    border: none;
    background-color: #fff;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #fff;
    border-bottom-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
    padding-bottom: 40px
}
.editor .ql-container.ql-snow .ql-editor {
    padding: 16px;
    height: 250px
}
.ad-top-leader-board::before,
.navbar .sticky>div.wrapper>.left .logo {
    padding-top: 8px
}
.editor .ql-container.ql-snow .ql-editor.ql-blank::before {
    font-style: normal
}
.editor .ql-container.ql-snow:after {
    content: attr(data-charCount);
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #777;
    position: absolute;
    right: 16px;
    bottom: 8px
}
.comment {
    position: relative
}
.comment>.commentheader {
    transition: background-color 2.2s cubic-bezier(.27, .28, 1, .49);
    background-color: #fff
}
.comment.animate>.commentheader {
    background-color: #fff9bf;
    transition: .2s cubic-bezier(.01, .02, .01, .01)
}
.comment .anchor {
    position: absolute;
    top: -52px
}
.comment .header .badge {
    flex: 50%
}
.comment .actionBar .align-left {
    flex: 50%
}
.comment .actionBar .stackonmobile>.commentAction {
    display: block
}
.comment .actionBar .stackonmobile>.commentAction:not(:first-child) {
    margin-top: 8px
}
.comment .replyWrapper {
    padding-left: 48px;
    border-top: 1px solid #eee;
    margin-top: 24px
}
.comment .replyWrapper .pointer:before {
    left: -24px
}
.comment .replyWrapper .commentMaker {
    margin-left: -64px
}
.comment .replyWrapper .commentMaker .editor .ql-container.ql-snow .ql-editor {
    height: 200px
}
.comment .replyWrapper .comment {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: solid 1px #eee
}
.comment .replyWrapper .comment:last-child {
    margin-bottom: 0
}
.comment .replyWrapper .seeMore {
    cursor: pointer
}
.comment .replyWrapper .loader {
    margin-left: 5px;
    width: 12px;
    height: 12px
}
@keyframes pulse {
    0% {
        opacity: 0
    }
    20%,
    70% {
        opacity: .2;
        background-color: #f9f9a7
    }
    50% {
        opacity: .8;
        background-color: #f9f9a7
    }
    100% {
        opacity: 0;
        background-color: #fff
    }
}
@media (min-width: 767px) {
    .comment .anchor {
        position: absolute;
        top: -72px
    }
    .comment .replyWrapper .commentMaker {
        margin-left: 0
    }
    .comment .replyWrapper .pointer:before {
        left: 24px
    }
    .comment .actionBar .stackonmobile>.commentAction {
        display: inline
    }
    .comment .actionBar .stackonmobile>.commentAction:not(:first-child) {
        margin-top: 0;
        margin-left: 32px
    }
}
.navbar,
.navbar .sticky>div.wrapper {
    display: flex
}
.commentEditing .close {
    font-size: 20px;
    line-height: 20px;
    cursor: pointer
}
.commentEditing .snowcontainer {
    margin-bottom: 16px
}
.commentEditing .editor .ql-container.ql-snow {
    background-color: #E1EFEF
}
.loader,
.loader:after {
    border-radius: 50%;
    width: .5em;
    height: .5em
}
.loader {
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: .3em solid rgba(0, 149, 188, .2);
    border-right: .3em solid rgba(0, 149, 188, .2);
    border-bottom: .3em solid rgba(0, 149, 188, .2);
    border-left: .3em solid #0095bc;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear
}
@-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
@keyframes load8 {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
.navbar {
    height: 48px;
    width: 100%;
    background: #0190ad;
    background: -moz-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #4ec2a6 75%, #4ec2a6 100%);
    background: -webkit-gradient(left top, right top, color-stop(0, #007e98), color-stop(30%, #06afcb), color-stop(45%, #06afcb), color-stop(75%, #4ec2a6), color-stop(100%, #4ec2a6));
    background: -webkit-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #4ec2a6 75%, #4ec2a6 100%);
    background: -o-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #4ec2a6 75%, #4ec2a6 100%);
    background: -ms-linear-gradient(left, #007e98 0, #06afcb 30%, #06afcb 45%, #4ec2a6 75%, #4ec2a6 100%);
    background: linear-gradient(to right, #007e98 0, #06afcb 30%, #06afcb 45%, #4ec2a6 75%, #4ec2a6 100%);
    z-index: 101;
    top: 0;
    position: -webkit-sticky;
    position: sticky
}
.navbar .sticky {
    position: -webkit-sticky;
    position: sticky;
    -webkit-transform: translateZ(0);
    top: 0;
    z-index: 100;
    margin: 0 auto;
    width: 100%
}
.navbar .sticky>div {
    height: 100%
}
.navbar .sticky>div.wrapper>.left {
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 90
}
.navbar .sticky>div.wrapper>.left.search-open {
    display: none
}
.navbar .sticky>div.wrapper>.left .logo svg {
    height: 25px;
    width: 136px
}
.navbar .sticky>div.wrapper>.left .hamburger {
    padding: 2px 0 0;
    margin-right: 12px;
    height: 18px
}
.navbar .sticky>div.wrapper>.left .hamburger .hamburger-box {
    width: 26px;
    height: 16px
}
.navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner,
.navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner:after,
.navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner:before {
    width: 26px;
    height: 2px;
    background-color: #fff
}
.navbar .sticky>div.wrapper>.left .hamburger.hamburger--collapse .hamburger-inner::after {
    top: -16px
}
.navbar .sticky>div.wrapper>.left .hamburger.hamburger--collapse.is-active {
    padding-top: 4px
}
.navbar .sticky>div.wrapper>.left .hamburger.hamburger--collapse.is-active .hamburger-inner::before {
    top: 0
}
.navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner::before {
    top: -8px
}
.navbar .sticky>div.wrapper>.right {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    z-index: 90
}
.navbar .sticky>div.wrapper>.right.search-open .search {
    width: 100%;
    right: 0;
    flex-direction: row
}
.navbar .sticky>div.wrapper>.right.search-open .login-action,
.navbar .sticky>div.wrapper>.right.search-open .search>.icon-magnifier {
    display: none
}
.navbar .sticky>div.wrapper>.right .search {
    height: 100%;
    right: 67px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0
}
.navbar .sticky>div.wrapper>.right .search svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 100;
    align-self: center
}
.navbar .sticky>div.wrapper>.right .search .search-input {
    position: absolute;
    right: 16px;
    top: 4px;
    width: 0;
    opacity: 0;
    z-index: -1
}
.navbar .sticky>div.wrapper>.right .search .search-input.open {
    width: 0;
    opacity: 1;
    z-index: 99
}
.navbar .sticky>div.wrapper>.right .search .search-input.animate {
    width: calc(100% - 30px);
    right: 0
}
.navbar .sticky>div.wrapper>.right .login-action {
    position: absolute;
    top: 0;
    cursor: pointer;
    z-index: 100;
    right: 10px
}
.navbar .sticky>div.wrapper>.right .login-action .graphic-circle {
    width: 48px;
    height: 48px
}
.navbar .sticky>div.wrapper>.right .login-action .graphic-circle svg {
    height: 100%;
    width: 100%
}
.navbar .sticky>div.wrapper>.right .login-action a:hover {
    text-decoration: none
}
.navbar .sticky>div.wrapper>.right .login-action a .label {
    font-size: 16px;
    line-height: 14px;
    height: 48px;
    width: 48px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    padding-top: 3px
}
.navbar .sticky>div.wrapper>.right .shortcut-links {
    position: absolute;
    right: 44px;
    height: 48px;
    align-items: center;
    display: flex;
    z-index: 90
}
.navbar .sticky>div.wrapper>.right .shortcut-links ul {
    display: flex;
    list-style: none;
    padding: 2px 0 0;
    margin: 0;
    font-size: 14px;
    line-height: 14px
}
.navbar .sticky>div.wrapper>.right .shortcut-links ul li:not(:last-child) {
    padding-right: 32px
}
.navbar .sticky .search-input {
    display: flex;
    justify-content: center;
    flex-direction: column
}
.navbar .sticky .search-input>form label.error {
    display: none!important
}
.navbar .sticky .search-input>form .field2 svg {
    height: 28px;
    width: 28px
}
.navbar .sticky .search-input>form .ac-button {
    padding: 0 16px
}
.navbar .sticky .search-input>form .ac-button span {
    display: flex
}
.navbar .sticky .search-input>form .ac-button:hover {
    opacity: 1
}
.navbar .sticky .search-input>form .field1 {
    margin-bottom: 0;
    width: calc(100% - 40px);
    padding-right: 35px;
    border: 1px solid #ddd
}
.navbar .sticky .search-input>form .field1 .ac-field.field-text {
    padding-right: 32px
}
.navbar .sticky .search-input>form .field2 {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center
}
.navbar .sticky .dropdown-menu {
    position: absolute;
    width: 100%;
    left: 0
}
.navbar .sticky .dropdown-menu .menu {
    height: 0;
    top: 48px;
    position: fixed;
    width: 100vw;
    overflow-y: hidden;
    z-index: 80
}
.navbar .sticky .dropdown-menu .menu.animate {
    transition: .2s cubic-bezier(.77, -.01, 1, 1)
}
.navbar .sticky .dropdown-menu .menu ul {
    list-style: none;
    padding: 0;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.navbar .sticky .dropdown-menu .menu ul>li .link {
    padding-left: 16px
}
.navbar .sticky .dropdown-menu .menu .cancel {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer
}
.navbar .sticky .dropdown-menu .menu .cancel:before {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    display: block;
    content: "X";
    font-size: 26px;
    color: #ddd
}
.navbar .sticky .dropdown-menu .menu.left {
    left: 0;
    background-color: #eef5f6
}
.navbar .sticky .dropdown-menu .menu.left ul.links {
    padding: 32px 0 24px;
    margin: 0;
    font-size: 18px;
    background-color: #eef5f6
}
.navbar .sticky .dropdown-menu .menu.left ul.links>li:not(:last-child) .link {
    padding-bottom: 24px
}
.navbar .sticky .dropdown-menu .menu.left .buttons {
    height: 40px;
    padding-left: 16px;
    margin-bottom: 32px
}
.navbar .sticky .dropdown-menu .menu.left .buttons a:first-child {
    margin-right: 16px
}
.navbar .sticky .dropdown-menu .menu.left .top {
    padding: 32px 16px 0
}
.navbar .sticky .dropdown-menu .menu.left .top .search-input {
    position: relative
}
.navbar .sticky .dropdown-menu .menu.right {
    right: 0;
    background-color: #eef5f6
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks {
    padding-top: 40px;
    padding-bottom: 20px;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    color: #fff;
    font-size: 18px;
    background-color: #00aacd
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link {
    padding-top: 10px;
    padding-bottom: 10px
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link.settings {
    padding-top: 5px;
    padding-bottom: 5px
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link.settings a .text {
    padding-left: 8px;
    line-height: 30px
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link.settings a svg {
    height: 30px;
    width: 27px
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link a {
    display: flex;
    color: #fff;
    text-decoration: none
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link a svg {
    height: 20px;
    width: 20px
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link a .text {
    padding-left: 15px
}
.navbar .sticky .dropdown-menu .menu.right ul.mylinks>li .link:hover {
    background-color: #0095bc
}
.navbar .sticky .dropdown-menu .menu.right .mytopics {
    background-color: #eef5f6;
    padding-top: 18px;
    padding-bottom: 40px
}
.navbar .sticky .dropdown-menu .menu.right .mytopics .topicstitle {
    color: #777;
    font-size: 17px;
    padding-left: 32px
}
.navbar .sticky .dropdown-menu .menu.right .mytopics .topics {
    padding-left: 32px;
    padding-top: 15px
}
.navbar .sticky .dropdown-menu .menu.right .mytopics .topics a {
    background-color: #fff;
    font-weight: 400;
    margin-right: 16px;
    margin-bottom: 8px
}
.navbar .sticky .dropdown-menu .menu.right .mytopics .seeall {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 32px;
    padding-top: 5px
}
.navbar .sticky .dropdown-menu .menu.right .mytopics .seeall>a {
    color: #777;
    text-decoration: none
}
@media (min-width: 767px) {
    .navbar .sticky>div.wrapper>.left.search-open,
    .navbar .sticky>div.wrapper>.right.search-open {
        display: flex
    }
    .navbar {
        height: 64px
    }
    .navbar .sticky>div.wrapper {
        position: relative
    }
    .navbar .sticky>div.wrapper>.left .logo {
        padding-top: 13px
    }
    .navbar .sticky>div.wrapper>.left .logo svg {
        height: 35px;
        width: 200px
    }
    .navbar .sticky>div.wrapper>.left .hamburger {
        padding-top: 0;
        margin-right: 24px;
        height: 28px
    }
    .navbar .sticky>div.wrapper>.left .hamburger .hamburger-box {
        width: 40px;
        height: 28px
    }
    .navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner,
    .navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner:after,
    .navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner:before {
        width: 40px
    }
    .navbar .sticky>div.wrapper>.left .hamburger.hamburger--collapse .hamburger-inner::after {
        top: -24px
    }
    .navbar .sticky>div.wrapper>.left .hamburger.hamburger--collapse.is-active {
        padding-top: 0
    }
    .navbar .sticky>div.wrapper>.left .hamburger.hamburger--collapse.is-active .hamburger-inner::before {
        top: 0
    }
    .navbar .sticky>div.wrapper>.left .hamburger .hamburger-inner::before {
        top: -12px
    }
    .navbar .sticky>div.wrapper>.right.search-open .search>svg,
    .navbar .sticky>div.wrapper>.right.search-open .shortcut-links {
        display: none
    }
    .navbar .sticky>div.wrapper>.right.search-open .search {
        right: 120px
    }
    .navbar .sticky>div.wrapper>.right.search-open .login-action {
        display: flex
    }
    .navbar .sticky>div.wrapper>.right .speechbubble.speechbubble-mainheader {
        height: 74px;
        width: 74px
    }
    .navbar .sticky>div.wrapper>.right .speechbubble.speechbubble-mainheader.speechbubble-arrowbottomright::before {
        bottom: 3px;
        right: 10px
    }
    .navbar .sticky>div.wrapper>.right .search {
        right: 120px
    }
    .navbar .sticky>div.wrapper>.right .search svg {
        height: 28px;
        width: 28px
    }
    .navbar .sticky>div.wrapper>.right .search .search-input {
        right: -16px;
        top: 12px;
        width: 69px;
        transition: .2s cubic-bezier(.77, -.01, 1, 1)
    }
    .navbar .sticky>div.wrapper>.right .search .search-input .field1 {
        border: 0
    }
    .navbar .sticky>div.wrapper>.right .search .search-input.open {
        width: 69px
    }
    .navbar .sticky>div.wrapper>.right .search .search-input.animate {
        width: 440px;
        right: -16px
    }
    .navbar .sticky>div.wrapper>.right .shortcut-links {
        right: 245px;
        height: 100%
    }
    .navbar .sticky>div.wrapper>.right .shortcut-links ul {
        font-size: 18px
    }
    .navbar .sticky>div.wrapper>.right .login-action {
        position: absolute;
        top: 0;
        cursor: pointer;
        right: 48px
    }
    .navbar .sticky>div.wrapper>.right .login-action a .label {
        font-size: 18px;
        line-height: 16px;
        height: 64px;
        width: 64px
    }
    .navbar .sticky>div.wrapper>.right .login-action .graphic-circle {
        width: 64px;
        height: 64px
    }
    .navbar .sticky .dropdown-menu .menu {
        height: 0;
        top: 64px;
        width: 336px
    }
    .navbar .sticky .dropdown-menu .menu ul>li .link {
        padding-left: 32px
    }
    .navbar .sticky .dropdown-menu .menu.left {
        border-bottom-right-radius: 20px;
        position: absolute;
        left: 48px
    }
    .navbar .sticky .dropdown-menu .menu.left .top {
        padding: 32px 32px 0
    }
    .navbar .sticky .dropdown-menu .menu.left .buttons {
        padding-left: 32px
    }
    .navbar .sticky .dropdown-menu .menu.right {
        border-bottom-left-radius: 20px;
        position: absolute;
        right: 48px
    }
}
@media (max-width: 996px) and (min-width: 768px) {
    .navbar .sticky>div.wrapper>.right .shortcut-links .care {
        display: none
    }
    .navbar .sticky>div.wrapper>.right .shortcut-links ul li:not(:last-child) {
        padding-right: 16px
    }
    .navbar .sticky>div.wrapper>.right .login-action {
        right: 48px
    }
    .navbar .sticky>div.wrapper>.right.search-open .search {
        right: 95px
    }
    .navbar .sticky>div.wrapper>.right .search {
        right: 85px
    }
    .navbar .sticky>div.wrapper>.right .search .search-input.animate {
        width: 300px
    }
    .navbar .sticky>div.wrapper>.right .shortcut-links {
        right: 177px
    }
    .navbar .sticky .search-input.animate {
        width: 290px
    }
}
@media (max-width: 355px) and (min-width: 200px) {
    .navbar .sticky>div.wrapper>.right .shortcut-links {
        right: 28px
    }
    .navbar .sticky>div.wrapper>.right .shortcut-links ul {
        width: 100px
    }
    .navbar .sticky>div.wrapper>.right .shortcut-links ul li>a {
        display: block;
        text-align: center
    }
}
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

.hamburger {
    padding: 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: .15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0
}
.hamburger:hover {
    opacity: .7
}
.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative
}
.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px
}
.hamburger-inner,
.hamburger-inner::after,
.hamburger-inner::before {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: .15s;
    transition-timing-function: ease
}
.advanced-dropdown .dropdown,
.advanced-dropdown .titled-dropdown-text {
    color: #fff;
    font-size: 18px;
    height: 40px;
    line-height: 36px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.hamburger-inner::after,
.hamburger-inner::before {
    content: "";
    display: block
}
.hamburger-inner::before {
    top: -10px
}
.hamburger-inner::after {
    bottom: -10px
}
.hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: .13s;
    transition-delay: .13s;
    transition-timing-function: cubic-bezier(.55, .055, .675, .19)
}
.hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top .2s .2s cubic-bezier(.33333, .66667, .66667, 1), opacity .1s linear
}
.hamburger--collapse .hamburger-inner::before {
    transition: top .12s .2s cubic-bezier(.33333, .66667, .66667, 1), transform .13s cubic-bezier(.55, .055, .675, .19)
}
.hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: .22s;
    transition-timing-function: cubic-bezier(.215, .61, .355, 1)
}
.hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top .2s cubic-bezier(.33333, 0, .66667, .33333), opacity .1s .22s linear
}
.hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top .1s .16s cubic-bezier(.33333, 0, .66667, .33333), transform .13s .25s cubic-bezier(.215, .61, .355, 1)
}
.hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: .13s;
    transition-delay: .13s;
    transition-timing-function: cubic-bezier(.55, .055, .675, .19)
}
.hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    transition: top .2s .2s cubic-bezier(.33333, .66667, .66667, 1), opacity .1s linear
}
.hamburger--collapse-r .hamburger-inner::before {
    transition: top .12s .2s cubic-bezier(.33333, .66667, .66667, 1), transform .13s cubic-bezier(.55, .055, .675, .19)
}
.hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: .22s;
    transition-timing-function: cubic-bezier(.215, .61, .355, 1)
}
.hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top .2s cubic-bezier(.33333, 0, .66667, .33333), opacity .1s .22s linear
}
.hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: top .1s .16s cubic-bezier(.33333, 0, .66667, .33333), transform .13s .25s cubic-bezier(.215, .61, .355, 1)
}
.advanced-dropdown {
    display: flex;
    width: auto;
    align-items: flex-end;
    justify-content: flex-end
}
.advanced-dropdown>div {
    display: inline-flex
}
.advanced-dropdown .titled-dropdown-text {
    padding-right: 2px
}
.advanced-dropdown .dropdown {
    border: none;
    border-bottom: solid #00b8c5 3px;
    border-radius: 0;
    padding-left: 0;
    margin-left: 8px;
    font-weight: 700;
    min-width: 150px
}
.advanced-dropdown .dropdown .list {
    font-size: 16px;
    border-radius: 20px 0;
    padding-top: 5px;
    padding-bottom: 5px
}
.advanced-dropdown .dropdown.wide:after {
    height: 12px;
    width: 12px;
    margin-top: -10px;
    right: 12px
}
.findcarehousing {
    max-width: 300px;
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    z-index: 99
}
.findcarehousing .twitter-typeahead {
    width: 100%
}
.findcarehousing .form-footer .ac-button {
    margin-top: 16px
}
@media (min-width: 767px) {
    .findcarehousing {
        margin-top: 0
    }
}
@media (max-width: 992px) and (min-width: 768px) {
    .findcarehousing {
        max-width: 100%;
        width: 100%;
        margin-top: 48px
    }
    .findcarehousing .o-heading {
        text-align: center
    }
    .findcarehousing form {
        width: 100%
    }
    .findcarehousing .twitter-typeahead {
        width: calc(100% - 162px)
    }
    .findcarehousing .fields {
        max-width: 470px;
        display: flex;
        flex-direction: row;
        margin: 0 auto
    }
    .findcarehousing .fields .divider {
        width: 50%
    }
    .findcarehousing .form-footer {
        display: flex;
        flex-direction: row;
        max-width: 470px;
        margin: 0 auto;
        position: relative
    }
    .findcarehousing .form-footer .ac-button {
        margin-top: 0;
        position: absolute;
        right: 0
    }
    .findcarehousing .form-footer .ac-button:hover {
        opacity: 1
    }
}
.success-headersection {
    background-color: #f1f1f1;
    margin-bottom: 32px
}
@media (min-width: 767px) {
    .success-headersection {
        margin-bottom: 48px
    }
}
.helpWidget {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    margin-bottom: 0;
    z-index: 100
}
.helpWidget.collapse {
    z-index: 1000;
    height: 100%
}
.helpWidget.collapse .body-content {
    display: block
}
.helpWidget.collapse .header .arrow,
.helpWidget.collapse .header .calltoaction .long {
    display: none
}
.helpWidget.collapse .header .calltoaction .short {
    display: block
}
.helpWidget.collapse .hamburger {
    position: absolute;
    right: 0;
    display: block;
    padding-right: 24px
}
.helpWidget.collapse .hamburger .hamburger-box .hamburger-inner,
.helpWidget.collapse .hamburger .hamburger-box .hamburger-inner:after,
.helpWidget.collapse .hamburger .hamburger-box .hamburger-inner:before {
    background-color: #fff;
    height: 2px
}
.helpWidget .hamburger {
    display: none
}
.helpWidget .header {
    position: relative;
    background-color: #0095bc
}
.helpWidget .header .calltoaction .long {
    display: block
}
.helpWidget .header .calltoaction .short {
    display: none
}
.helpWidget .header .graphic-circle {
    min-width: 64px
}
.helpWidget .header .arrow {
    position: absolute;
    right: 21px;
    transform: rotate(180deg);
    top: calc(50% - 28px)
}
.helpWidget .header .arrow:after {
    content: ' ';
    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC40IDEwLjU2Ij48ZyBpZD0iTGF5ZXJfOSIgZGF0YS1uYW1lPSJMYXllciA5Ij48cGF0aCBpZD0iYXJyX2NvcHlfMiIgZGF0YS1uYW1lPSJhcnIgY29weSAyIiBzdHlsZT0iZmlsbDojZmZmOyIgZD0iTTI3LjQuNjhsLTEyLjYsOEwyLjI0LjY4LjgsMi4wNmwxNCw4Ljg4LDE0LTguODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC42IC0wLjUyKSIvPjwvZz48L3N2Zz4=);
    height: 11px;
    width: 26px;
    display: block;
    background-repeat: no-repeat;
    cursor: pointer
}
.helpWidget .body-content {
    display: none
}
.helpWidget .body-content input[type=text] {
    background-color: #e5f1f1;
    -webkit-box-shadow: 0 0 0 30px #e5f1f1 inset
}
.helpWidget .body-content ul.standard-list {
    padding-left: 0
}
.helpWidget .body-content .disclaimer a {
    text-decoration: underline;
    color: #777
}
.helpWidget .body-content .twitter-typeahead {
    width: 100%
}
@media (max-width: 992px) and (min-width: 767px) {
    .helpWidget {
        max-width: 380px;
        border-right: solid 1px #0095bc;
        border-left: solid 1px #0095bc;
        height: auto;
        left: auto
    }
    .helpWidget.collapse {
        min-height: 514px;
        height: auto
    }
}
@media (min-width: 992px) {
    .helpWidget {
        border: 1px solid #0095bc;
        margin-bottom: 48px;
        position: relative;
        border-bottom-left-radius: 30px;
        border-top-right-radius: 30px;
        min-height: 514px
    }
    .helpWidget .body-content {
        display: block
    }
    .helpWidget .header {
        border-top-right-radius: 30px
    }
    .helpWidget .header .arrow,
    .helpWidget .header .calltoaction .long {
        display: none
    }
    .helpWidget .header .calltoaction .short {
        display: block
    }
}
.sectionHeader {
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
    position: relative
}
.sectionHeader .anchor {
    position: absolute;
    top: -40px
}
.sectionHeader .title {
    padding-bottom: 8px
}
.sectionHeader .tabs .tabitem {
    display: inline-block;
    line-height: 18px;
    border: 1px solid #ddd;
    padding: 8px;
    cursor: pointer;
    width: 32.4%;
    text-align: center;
    word-break: keep-all
}
.sectionHeader .tabs .tabitem.active,
.sectionHeader .tabs .tabitem:hover {
    background-color: #E1EFEF;
    border: 1px solid #E1EFEF;
    text-decoration: none;
    color: #2c4446
}
.sectionHeader .tabs .tabitem.active {
    position: relative
}
.sectionHeader .tabs .tabitem.active:after {
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    content: '';
    bottom: -15px;
    left: 15px;
    border-style: solid;
    border-width: 17px 18px 0 5px;
    border-color: #E1EFEF transparent
}
@media (min-width: 767px) {
    .sectionHeader {
        display: block
    }
    .sectionHeader .anchor {
        top: -60px
    }
    .sectionHeader .tabs {
        float: right;
        padding-left: 16px;
        background-color: #fff;
        margin-top: -40px
    }
    .sectionHeader .tabs .tabitem {
        line-height: 18px;
        padding: 10px 24px;
        float: left;
        width: auto
    }
    .sectionHeader .tabs .tabitem:not(:last-child) {
        margin-right: 4px
    }
    .sectionHeader .tabs .tabitem br {
        display: none
    }
    .sectionHeader .title {
        flex: 1;
        padding-bottom: 4px;
        margin-top: -4px;
        margin-right: 16px;
        border-bottom: solid 1px #ddd
    }
}
@media (max-width: 1124px) and (min-width: 992px) {
    .sectionHeader .tabs {
        margin-top: -56px
    }
    .sectionHeader .tabs .tabitem {
        width: 100px;
        min-width: 110px
    }
}
.forumEntry .links {
    display: inline-block;
    overflow-y: hidden;
    height: 20px
}
.forumEntry .links a,
.forumEntry .links span {
    float: left
}
.forumEntry .links a:first-of-type:before {
    content: "|";
    margin-right: 8px;
    margin-left: 8px
}
.forumEntry .links a:before {
    content: ",";
    margin-right: 5px
}
.forumActivity {
    margin-bottom: 48px
}
.forumActivity .readMore {
    position: relative;
    display: inline-block;
    text-decoration: none
}
.forumActivity .readMore:after {
    content: "∟";
    transform: rotate(-135deg);
    font-size: 14px;
    position: absolute;
    height: 0;
    line-height: 4px;
    bottom: 10px;
    margin-left: 2px;
    color: #0095bc;
    display: inline-block
}
.forumActivity .readMore:hover {
    text-decoration: underline
}
.forumActivity .readMore:after,
.forumActivity .readMore:hover:after {
    text-decoration: none
}
.nlSubscribe {
    background-color: #fff;
    height: 100vh;
    width: 100%;
    padding-top: 110px;
    position: fixed;
    top: 0;
    left: 0
}
.nlSubscribe .close {
    font-size: 64px;
    color: #999;
    position: absolute;
    right: 0;
    top: 7px;
    line-height: 0
}
.nlSubscribe .close.hamburger .hamburger-inner,
.nlSubscribe .close.hamburger .hamburger-inner:after,
.nlSubscribe .close.hamburger .hamburger-inner:before {
    height: 2px;
    background-color: #999
}
.nlSubscribe #nlModal-form {
    padding: 0 16px
}
.nlSubscribe #nlModal-form .ac-field {
    background-color: #e5f1f1
}
.listing li {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: solid 1px #ddd
}
.listing li.mobile-frame-less {
    border-bottom: none;
    margin-bottom: 0
}
.listing li .listing-item .body {
    width: 100%
}
@media (min-width: 992px) {
    .listing li {
        padding-bottom: 32px;
        margin-bottom: 32px
    }
    .listing li.mobile-frame-less {
        border-bottom: solid 1px #ddd;
        margin-bottom: 32px
    }
}
.fancyStars {
    display: inline-flex
}
.fancyStars .rating {
    vertical-align: middle;
    padding-left: 6px
}
.fancyStars .fancyStar {
    height: 19px;
    width: 20px;
    vertical-align: middle
}
.fancyStars .fancyStar:not(:last-child) {
    margin-right: 2px
}
.fancyStars .fancyStar .half1,
.fancyStars .fancyStar .half2 {
    fill: #bbb
}
.fancyStars .fancyStar.full .half1,
.fancyStars .fancyStar.full .half2,
.fancyStars .fancyStar.half .half2 {
    fill: #45b89c
}
.fancyStars .fancyStar.small {
    height: 18px;
    width: 17px
}
.nearResources {
    display: flex;
    flex-direction: column
}
.nearResources .column:first-child {
    padding-bottom: 16px
}
.directoryLogo {
    display: none
}
@media (min-width: 767px) {
    .nearResources {
        flex-direction: row
    }
    .nearResources .column {
        width: 50%
    }
    .nearResources .column:first-child {
        padding-right: 40px;
        padding-bottom: 0
    }
    .directoryLogo {
        display: block
    }
    .directoryLogo .logobox {
        width: 240px;
        height: 160px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 32px;
        padding-left: 32px
    }
    .directoryLogo .logobox.narrow {
        padding: 12px;
        width: 144px;
        height: 164px
    }
    .directoryLogo .logobox.narrow img {
        max-height: 140px;
        max-width: 120px
    }
    .directoryLogo .logobox img {
        max-width: 176px;
        vertical-align: middle;
        max-height: 158px
    }
}
.newsletterBanner {
    background-color: #0095bc;
    display: inline-block;
    width: 100%
}
.newsletterBanner .wrapper .callToAction {
    margin-bottom: 16px;
    max-width: 350px
}
.newsletterBanner .wrapper>div:last-child {
    width: 100%
}
.newsletterBanner .wrapper .input-field #EmailAddress-error {
    align-self: flex-start;
    margin-top: -15px;
    color: #fff;
    margin-bottom: 15px
}
@media (min-width: 767px) {
    .newsletterBanner .wrapper {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row
    }
    .newsletterBanner .wrapper .callToAction {
        min-width: 350px;
        margin-bottom: 0;
        max-width: 100%;
        font-size: 40px
    }
    .newsletterBanner .wrapper form:first-child,
    .newsletterBanner .wrapper>div:first-child {
        width: 40%
    }
    .newsletterBanner .wrapper form:last-child,
    .newsletterBanner .wrapper>div:last-child {
        width: 60%
    }
    .newsletterBanner .wrapper form {
        display: flex
    }
    .newsletterBanner .wrapper form .input-field {
        width: 100%
    }
    .newsletterBanner .wrapper .input-field {
        position: relative
    }
    .newsletterBanner .wrapper .input-field #EmailAddress-error {
        position: absolute;
        bottom: 0;
        margin-top: 0;
        margin-bottom: 0
    }
}
.threeRowList .list .column {
    width: 100%
}
@media (min-width: 767px) {
    .threeRowList .list .column {
        width: 33.33%;
        float: left
    }
}
.two-row-list .list .column {
    width: 100%
}
@media (min-width: 767px) {
    .two-row-list .list .column {
        width: 50%;
        float: left
    }
}
.find-care-widget-form .find-care-widget {
    background-color: #01667b
}
.find-care-widget-form .find-care-widget label.c-heading {
    line-height: 40px;
    margin-right: 16px;
    max-width: 52px
}
.find-care-widget-form .find-care-widget .twitter-typeahead {
    width: 100%
}
.master-container .find-care-widget-form .find-care-widget {
    width: calc(100% + 32px);
    margin-left: -16px
}
@media (min-width: 767px) {
    .find-care-widget-form.mobile {
        display: none!important
    }
    .find-care-widget-form .find-care-widget {
        display: flex;
        border-bottom-left-radius: 24px;
        border-top-right-radius: 24px;
        padding-right: 40px;
        padding-left: 40px;
        margin-left: 0;
        width: 100%
    }
    .find-care-widget-form .find-care-widget .fancy-container {
        flex-grow: 1;
        width: 50%
    }
    .find-care-widget-form .find-care-widget .fancy-container:first-child {
        padding-right: 32px;
        margin-bottom: 0
    }
    .find-care-widget-form .find-care-widget .fancy-container .twitter-typeahead {
        width: 90%
    }
    .master-container .find-care-widget-form .find-care-widget {
        width: 100%;
        margin-left: 0
    }
}
.blue-header-modal {
    color: #fff;
    background-color: #fff;
    height: 100%;
    position: fixed;
    top: 0;
    margin-top: 0;
    width: 100%;
    max-width: 100%;
    border: none;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    overflow-y: scroll
}
.blue-header-modal .header {
    background-color: #0095bc;
    padding: 32px 16px;
    position: relative
}
.blue-header-modal .header .close {
    color: #fff;
    font-size: 48px;
    font-weight: 300;
    right: 11px;
    top: -6px;
    position: absolute
}
.blue-header-modal .header .close:focus,
.blue-header-modal .header .close:hover {
    color: #fff;
    text-decoration: none;
    cursor: pointer
}
.blue-header-modal .body {
    padding: 24px 0
}
.blue-header-modal .body .inner {
    padding-right: 16px;
    padding-left: 16px
}
.blue-header-modal .body input[type=text],
.blue-header-modal .body select {
    background-color: #e5f1f1;
    -webkit-box-shadow: 0 0 0 30px #e5f1f1 inset
}
.blue-header-modal .body .twitter-typeahead {
    width: 100%
}
.blue-header-modal .body .twitter-typeahead .tt-menu .tt-suggestion {
    background-color: #e5f1f1
}
.blue-header-modal .body .dismiss {
    cursor: pointer
}
.blue-header-modal .body .disclaimer a {
    color: #777;
    text-decoration: underline
}
.speechbubble.speechbubble-findanswers a:hover,
a {
    text-decoration: none
}
.blue-header-modal::before {
    display: none
}
@media (min-width: 767px) {
    .blue-header-modal {
        width: 100%;
        max-width: 640px;
        margin: 0 auto 120px;
        top: 153px;
        left: calc(50% - 320px);
        height: auto;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow-y: auto
    }
    .blue-header-modal .header {
        padding: 24px 32px
    }
    .blue-header-modal .header .close {
        right: 16px;
        top: 2px
    }
    .blue-header-modal .body {
        border-right: solid #0095bc 1px;
        border-bottom: solid #0095bc 1px;
        border-left: solid #0095bc 1px;
        border-bottom-left-radius: 20px
    }
    .blue-header-modal .body .inner {
        max-width: 360px;
        margin: 0 auto;
        padding-right: 0;
        padding-left: 0
    }
}
.gallery {
    display: inline-block;
    height: 80px;
    font-size: 0
}
.gallery img {
    max-height: 100%;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    float: left
}
.gallery .seeall {
    float: left;
    cursor: pointer;
    position: relative
}
.gallery .seeall svg {
    height: 30px;
    width: 30px
}
.gallery .seeall .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}
.gallery .seeall .layer.cover {
    background-color: #fff;
    opacity: .6;
    position: relative
}
.gallery .seeall .layer.text {
    line-height: 60px;
    text-align: center
}
.gallery .seeall .layer.image svg {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 37px;
    left: 26px
}
.blueimp-gallery.image-gallery {
    background-color: #333
}
.blueimp-gallery.image-gallery>.next {
    right: 4px
}
.blueimp-gallery.image-gallery>.prev {
    left: 4px
}
.blueimp-gallery.image-gallery>.next,
.blueimp-gallery.image-gallery>.prev {
    border: none;
    background: 0 0
}
.blueimp-gallery.image-gallery>.next svg,
.blueimp-gallery.image-gallery>.prev svg {
    width: 20px;
    height: 48px;
    fill: #fff
}
.blueimp-gallery.image-gallery .close {
    font-size: 52px
}
.blueimp-gallery.image-gallery .close .hamburger-inner,
.blueimp-gallery.image-gallery .close .hamburger-inner::after,
.blueimp-gallery.image-gallery .close .hamburger-inner::before {
    height: 2px;
    background-color: #fff
}
.blueimp-gallery.image-gallery .indicator {
    bottom: 24px
}
.blueimp-gallery.image-gallery .indicator li {
    height: 8px;
    width: 8px;
    margin: 3px 4px;
    background: #fff
}
.blueimp-gallery.image-gallery .indicator li.active {
    height: 10px;
    width: 10px;
    border-radius: 8px;
    margin: 2px 4px
}
.blueimp-gallery.image-gallery .indicator li:after {
    display: none
}
@media (min-width: 767px) {
    .blueimp-gallery.image-gallery>.next {
        right: 16px
    }
    .blueimp-gallery.image-gallery>.prev {
        left: 16px
    }
}
.vertical-arrow-down::after,
.vertical-arrow-up::after {
    content: '';
    display: block;
    height: 8px;
    margin-top: -4px;
    right: -16px;
    width: 8px;
    pointer-events: none
}
.vertical-arrow-down {
    position: relative
}
.vertical-arrow-down::after {
    border-bottom: 2px solid #0095bc;
    border-right: 2px solid #0095bc;
    position: absolute;
    top: 10px;
    -webkit-transform-origin: 66% 66%;
    -ms-transform-origin: 66% 66%;
    transform-origin: 66% 66%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg)
}
.vertical-arrow-up {
    position: relative
}
.vertical-arrow-up::after {
    border-top: 2px solid #0095bc;
    border-left: 2px solid #0095bc;
    position: absolute;
    top: 14px;
    -webkit-transform-origin: 66% 66%;
    -ms-transform-origin: 66% 66%;
    transform-origin: 66% 66%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg)
}
.banner-alert {
    border-bottom: solid #fff 1px;
    width: 100%;
    background-color: #E1EFEF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 0
}
.banner-alert .blue-link {
    position: relative
}
.banner-alert .blue-link:after {
    content: "∟";
    transform: rotate(-135deg);
    display: inline-block;
    font-size: 14px;
    position: absolute;
    height: 0;
    line-height: 4px;
    bottom: 10px;
    margin-left: 2px;
    color: #0095bc
}
.faq {
    border-left: 12px solid #E1EFEF;
    padding-left: 16px;
    width: 100%;
    margin-bottom: 32px;
    margin-top: -8px
}
.faqContent .faqContentItem {
    position: relative
}
.faqContent .faqContentItem .anchor {
    position: absolute;
    top: -58px
}
@media (min-width: 992px) {
    .faq {
        width: 300px;
        margin-bottom: 40px;
        margin-top: 0
    }
}
.miamiFormWidget {
    text-align: center;
    margin-left: -16px;
    margin-right: -16px
}
.miamiFormWidget h2 {
    text-align: center
}
@media (min-width: 767px) {
    .faqContent .faqContentItem .anchor {
        top: -74px
    }
    .miamiFormWidget {
        margin-left: 0;
        margin-right: 0
    }
}
.imagecircle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative
}
.imagecircle .avatar-image-container {
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0
}
.imagecircle .avatar-image-container.compat-object-fit {
    background-size: cover!important;
    background-position: center center!important
}
.imagecircle .avatar-image-container.compat-object-fit img {
    opacity: 0
}
.imagecircle .avatar-image-container.object-fit-wrapper img,
.imagecircle .avatar-image-container.object-fit-wrapper object {
    object-fit: cover;
    width: 100%;
    height: 100%
}
.imagecircle>img,
.imagecircle>object {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0
}
.imagecircle img,
.imagecircle object,
.imagecircle svg {
    border-radius: 1000px
}
.imagecircle svg {
    height: calc(100% - 2px);
    width: calc(100% - 2px)
}
.imagecircle .initials {
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    font-family: "Kamerik 105";
    font-size: 26px;
    font-weight: 200;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.speechbubble.speechbubble-arrowbottomleft::before,
.speechbubble.speechbubble-arrowbottomright::before,
.speechbubble.speechbubble-arrowtopleft::before,
.speechbubble.speechbubble-arrowtopright::before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 16px 0 5px;
    display: block;
    width: 23px;
    height: 28px;
    border-radius: 1000px;
    background-color: inherit;
    border-color: inherit
}
.speechbubble {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #00bac5;
    border-color: #00bac5;
    border-radius: 50%;
    color: #fff;
    z-index: 5;
    position: relative
}
.speechbubble.speechbubble-arrowbottomleft::before {
    border-bottom-left-radius: 0;
    z-index: -1;
    bottom: 4px;
    left: 3px
}
.speechbubble.speechbubble-arrowbottomright::before {
    border-bottom-right-radius: 0;
    z-index: -1;
    bottom: 4px;
    right: 3px
}
.speechbubble.speechbubble-arrowtopleft::before {
    border-top-left-radius: 0;
    z-index: -1;
    top: 4px;
    left: 3px
}
.speechbubble.speechbubble-arrowtopright::before {
    border-top-right-radius: 0;
    z-index: -1;
    top: 4px;
    right: 3px
}
.speechbubble.speechbubble-font-enlarge {
    height: 27px;
    width: 27px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 14px;
    background-color: #00accc;
    display: flex;
    flex-direction: row;
    cursor: pointer
}
.speechbubble.speechbubble-font-enlarge>.lower-font {
    font-size: 10px;
    text-transform: capitalize;
    margin-top: 2px
}
.speechbubble.speechbubble-font-enlarge>.bigger-font {
    font-size: 14px;
    text-transform: capitalize
}
.speechbubble.speechbubble-answerquestioncutted {
    height: 342px;
    width: 342px;
    background-color: #0099b6;
    border-color: #0099b6
}
.speechbubble.speechbubble-answerquestioncutted.speechbubble-arrowtopleft::before {
    top: 28px;
    left: 48px;
    background-color: #0099b6;
    border-color: #0099b6
}
.speechbubble.speechbubble-follow {
    height: 40px;
    width: 40px;
    background-color: #ccebf0;
    border-color: #ccebf0;
    color: #0099b6;
    cursor: pointer
}
.speechbubble.speechbubble-threadcount {
    height: 58px;
    width: 58px;
    background-color: #00accc
}
.speechbubble.speechbubble-threadcount.speechbubble-arrowbottomright::before {
    bottom: 3px;
    right: 7px;
    background-color: #00accc;
    border-color: #00accc
}
.speechbubble.speechbubble-newslettercutted {
    height: 500px;
    width: 500px;
    position: absolute;
    top: -75px;
    left: -30px;
    background-color: #2f5759
}
.speechbubble.speechbubble-newslettercutted.speechbubble-arrowtopright::before {
    top: 55px;
    right: 75px;
    left: auto;
    width: 50px;
    height: 50px;
    border-radius: 0;
    background-color: #2f5759;
    border-color: #2f5759
}
.speechbubble.speechbubble-expert {
    height: 70px;
    width: 70px;
    font-family: 'Kamerik 105', Arial, Helvetica, sans-serif;
    flex-direction: column;
    background-color: #ef955e;
    border-color: #ef955e;
    font-size: 14px;
    font-weight: 400
}
.speechbubble.speechbubble-expert.speechbubble-arrowbottomleft::before {
    bottom: 3px;
    left: 4px;
    background-color: #ef955e;
    border-color: #ef955e
}
.speechbubble.speechbubble-expert>div {
    display: table-row;
    font-weight: 400;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.speechbubble.speechbubble-expand-reply {
    height: 31px;
    width: 31px;
    background-color: #fff
}
.speechbubble.speechbubble-loadfirst,
.speechbubble.speechbubble-loadmore {
    height: 50px;
    width: 50px;
    background-color: #00accc;
    margin: 0 auto;
    cursor: pointer
}
.speechbubble.speechbubble-expand-reply::before {
    border: solid #888;
    content: ' ';
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg)
}
.speechbubble.speechbubble-loadfirst::before,
.speechbubble.speechbubble-loadmore::before {
    padding: 3px;
    top: 20px;
    left: 21px;
    transform: rotate(45deg);
    content: ' '
}
.speechbubble.speechbubble-loadmore {
    display: inline-block;
    position: relative
}
.speechbubble.speechbubble-loadmore::before {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: block;
    position: absolute;
    -webkit-transform: rotate(45deg)
}
.speechbubble.speechbubble-loadfirst {
    display: inline-block;
    position: relative
}
.speechbubble.speechbubble-loadfirst::before {
    border: solid #fff;
    border-width: 0 0 2px 2px;
    display: block;
    position: absolute;
    -webkit-transform: rotate(45deg)
}
.speechbubble.speechbubble-findanswers {
    height: 388px;
    width: 388px;
    background-color: #e5f1f1;
    border-color: #e5f1f1;
    flex-direction: column;
    align-self: center;
    position: absolute;
    bottom: auto;
    top: -275px;
    right: 20px;
    justify-content: center
}
.speechbubble.speechbubble-findanswers.speechbubble-arrowbottomleft:before {
    top: 303px;
    left: 48px;
    height: 38px;
    width: 38px;
    background-color: #e5f1f1;
    border-color: #e5f1f1;
    border-radius: 1000px 1000px 1000px 0
}
.speechbubble.speechbubble-findanswers .calltoaction {
    margin-top: 180px;
    padding: 0 55px 15px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: #5f696a;
    text-align: center;
    max-width: 388px
}
.speechbubble.speechbubble-loadlast {
    height: 50px;
    width: 50px;
    background-color: #00accc;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    cursor: pointer
}
.speechbubble.speechbubble-loadlast::before {
    border: solid #fff;
    content: ' ';
    border-width: 2px 2px 0 0;
    display: block;
    padding: 3px;
    position: absolute;
    top: 20px;
    left: 21px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg)
}
.speechbubble.speechbubble-loadhidden {
    background-color: transparent;
    height: 50px;
    width: 50px;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    cursor: auto
}
.speechbubble.speechbubble-mainheader {
    height: 56px;
    width: 56px;
    background-color: #4ec2a6
}
.speechbubble.speechbubble-mainheader.speechbubble-arrowbottomright::before {
    border-color: #64ca9b;
    background-color: #64ca9b;
    bottom: 3px;
    right: 7px;
    left: initial;
    height: 6px;
    width: 2px
}
.speechbubble.speechbubble-articleprofilelinks {
    height: 30px;
    width: 30px;
    background-color: #e7eff1
}
.speechbubble.speechbubble-genericavatar {
    height: 30px;
    width: 30px
}
.speechbubble.speechbubble-articleheaderbackground {
    height: 550px;
    width: 550px;
    background-color: #EDF5F7
}
.speechbubble.speechbubble-articleheaderbackground.speechbubble-arrowbottomright::before {
    border-color: #EDF5F7;
    background-color: #EDF5F7;
    bottom: 39px;
    right: 81px;
    height: 60px;
    width: 60px
}
.speechbubble.speechbubble-orangearticlebody {
    height: 378px;
    width: 378px;
    background-color: #ef955e
}
.speechbubble.speechbubble-orangearticlebody.speechbubble-arrowtopleft::before {
    top: 44px;
    left: 48px;
    height: 30px;
    width: 30px;
    background-color: #ef955e;
    border-color: #ef955e
}
.speechbubble.speechbubble-orangearticlebody.speechbubble-arrowbottomleft::before {
    bottom: 39px;
    left: 48px;
    height: 40px;
    width: 40px;
    background-color: #ef955e;
    border-color: #ef955e
}
.speechbubble.speechbubble-orangearticlebody>div.inner-container {
    width: 250px;
    padding-top: 21px;
    display: flex;
    flex-direction: column
}
.speechbubble.speechbubble-orangearticlebody>div.inner-container h4 {
    font-family: "Kamerik 105";
    font-weight: 300;
    font-size: 24px;
    color: #fff;
    margin-bottom: 20px;
    text-transform: uppercase
}
.field.field-dropdown,
.field.field-text,
.profileform-field>.field-container label,
.profileform-field>.field-container label.error,
.speechbubble.speechbubble-orangearticlebody>div.inner-container p,
.toggle .slider:after,
.tool-tip,
.typeahead__field input.field-dropdown.field,
.typeahead__field input.field-text.field,
label.error,
ul.arrowlist {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.speechbubble.speechbubble-orangearticlebody>div.inner-container p {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #fff;
    margin-bottom: 20px
}
.speechbubble.speechbubble-orangearticlebody>div.inner-container .profileblock {
    align-self: center
}
.speechbubble.speechbubble-orangearticlebody>div.inner-container .profileblock .profileblock-body .username {
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #fff
}
.speechbubble.speechbubble-orangearticlebody>div.inner-container .profileblock .profileblock-image .imagecircle {
    width: 50px;
    height: 50px
}
.speechbubble.speechbubble-back {
    height: 25px;
    width: 25px;
    cursor: pointer
}
.speechbubble.speechbubble-back:after {
    content: "❮";
    position: absolute;
    color: #fff;
    top: 3px;
    left: 7px
}
.speechbubble.speechbubble-profilearrow {
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: relative;
    background-color: #e7eff1
}
.speechbubble.speechbubble-profilearrow:after {
    content: "∟";
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #00accc;
    font-weight: 700;
    text-align: center;
    position: relative;
    transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    top: 2px
}
.speechbubble.speechbubble-profilearrow.unfolded:after {
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    top: -1px
}
.speechbubble.speechbubble-welcome {
    width: 362px;
    height: 362px
}
.speechbubble.speechbubble-welcome.speechbubble-arrowbottomright::before {
    bottom: 39px;
    right: 48px;
    height: 30px;
    width: 30px;
    background-color: #00bac5;
    border-color: #00bac5
}
.speechbubble.speechbubble-careguides {
    width: 200px;
    height: 200px;
    background-color: #ef955e;
    border-color: #ef955e;
    flex-direction: row
}
.shade,
hr {
    width: 100%
}
.speechbubble.speechbubble-careguides.speechbubble-arrowbottomleft::before {
    background-color: #ef955e;
    border-color: #ef955e;
    bottom: 18px;
    left: 24px
}
@media (min-width: 768px) {
    .speechbubble .speechbubble-font-enlarge {
        display: inline-flex
    }
}
body.menu-open {
    overflow: hidden
}
@media (max-width: 768px) {
    body.deactivatescrollonmobile {
        overflow: hidden
    }
}
html {
    margin-right: 0!important;
    overflow: visible!important
}
.shade {
    background: #f6f8f9;
    background: -moz-linear-gradient(top, #fff 0, #fff 0, #f3f3f3 100%);
    background: -webkit-linear-gradient(top, #fff 0, #fff 0, #f3f3f3 100%);
    background: linear-gradient(to bottom, #fff 0, #fff 0, #f3f3f3 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#f3f3f3 ', endColorstr='#fff', GradientType=0);
    z-index: -1;
    display: block;
    height: 120px;
    margin-top: -70px;
    position: absolute;
    left: 0
}
button {
    outline: 0
}
a {
    color: #0095bc;
    outline: 0
}
a:hover {
    color: #02abca;
    text-decoration: underline
}
a>svg {
    pointer-events: none
}
*,
:after,
:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
}
hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
    height: 0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
}
.vertical-rule {
    margin: 0 20px;
    border-left: 1px solid #eee;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
}
.text-light {
    font-weight: 300!important
}
.text-normal {
    font-weight: 400!important
}
.text-semi-bold {
    font-weight: 600!important
}
.text-bold {
    font-weight: 700!important
}
.text-suva-grey {
    color: #888!important
}
.text-swamp {
    color: #2a3334!important
}
.text-iris-blue {
    color: #02abca!important
}
.text-zircon {
    color: #f0f1f1!important
}
.text-gallery {
    color: #eee!important
}
.text-no-wrap {
    white-space: nowrap!important
}
.no-margin-top {
    margin-top: 0!important
}
.no-margin-bottom {
    margin-bottom: 0!important
}
.border-very-light-grey {
    border: 1px solid #ccc
}
.ontop {
    z-index: 99!important
}
.master-center-container {
    width: 1200px;
    margin: 0 auto;
    padding-right: 45px;
    padding-left: 45px
}
ul.arrowlist {
    padding-left: 0;
    font-size: 18px;
    margin: 0;
    list-style: none
}
.ad-bottom-medium-rectangle,
.rail-container .rail-right .section .sectionitem .findcarehousing-form,
.rail-container .rail-right .section .sectionitem>form>div {
    margin-bottom: 48px
}
ul.arrowlist>li {
    font-weight: 700;
    line-height: 24px;
    display: flex
}
ul.arrowlist>li:before {
    content: "∟";
    font-size: 10px;
    transform: rotate(224deg);
    display: inline-block;
    margin-right: 20px;
    align-self: flex-start;
    align-content: flex-start;
    height: 24px;
    line-height: 24px;
    color: #fff
}
ul.arrowlist>li:not(:last-child) {
    padding-bottom: 15px
}
ul.arrowlist>li>a {
    text-decoration: none;
    color: #fff
}
.adplaceholder {
    display: flex;
    justify-content: center;
    align-items: center
}
.profileform-field.displaycolumn,
.rail-container {
    flex-direction: column
}
.rail-container {
    display: flex;
    padding-top: 32px
}
.rail-container .rail-left {
    width: 100%
}
.rail-container .rail-right {
    width: 100%;
    z-index: 1
}
.rail-container .rail-right .section {
    will-change: contents
}
.rail-container .rail-right .section.profile {
    margin-top: -40px
}
.rail-container .rail-right .section .sticky-container {
    position: -webkit-sticky;
    position: sticky;
    top: 120px
}
.rail-container .rail-right .section .sticky-container:after,
.rail-container .rail-right .section .sticky-container:before {
    content: '';
    display: table
}
@media screen and (max-width: 1200px) {
    .master-center-container {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        padding-left: 45px;
        padding-right: 45px
    }
}
@media screen and (max-width: 768px) {
    .master-center-container {
        padding-left: 15px;
        padding-right: 15px
    }
}
.pull-right {
    float: right!important
}
.pull-left {
    float: left!important
}
.clearfix::after,
.clearfix::before {
    display: table;
    content: " "
}
.clearfix::after {
    clear: both
}
.hp {
    display: none!important
}
a.seemore {
    position: relative;
    white-space: nowrap;
    padding-right: 20px;
    display: inline-flex;
    align-items: flex-end
}
a.seemore .arrow-link-right,
a.seemore .arrow-link-right:after,
a.seemore .seemore-arrow,
a.seemore .seemore-arrow:after {
    display: inline-block;
    text-decoration: none
}
a.seemore.opened .seemore-arrow {
    transform: rotate(-90deg)
}
a.seemore .seemore-arrow {
    transform: rotate(90deg);
    font-size: 14px;
    text-align: center;
    line-height: 22px;
    height: 22px;
    width: 22px
}
a.seemore .seemore-arrow:after {
    content: '❯'
}
a.seemore .seemore-arrow:hover {
    text-decoration: none
}
a.seemore .arrow-link-right {
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    width: 16px
}
a.seemore .arrow-link-right:after {
    content: '∟';
    transform: rotate(225deg)
}
a.seemore .arrow-link-right:hover {
    text-decoration: none
}
.closed-thread {
    background-color: #f4f4f4
}
@media (min-width: 768px) {
    .rail-container {
        padding-top: 48px;
        flex-direction: row
    }
    .rail-container .rail-left {
        float: left;
        width: calc(100% - 300px);
        padding-right: 60px;
        min-height: 740px
    }
    .rail-container .rail-right {
        width: 300px
    }
    .prevent-wrap-medium {
        white-space: pre;
        text-wrap: avoid
    }
}
.button,
.rounded-button {
    white-space: nowrap;
    text-decoration: none
}
@media (max-width: 991px) and (min-width: 767px) {
    .rail-container .rail-left {
        float: left;
        width: 100%;
        padding-right: 0;
        padding-left: 0;
        margin: 0 auto
    }
    .rail-container .rail-right {
        width: 0
    }
}
@media (max-width: 767px) {
    .hidden-xs {
        display: none!important
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .hidden-sm {
        display: none!important
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .hidden-md {
        display: none!important
    }
}
@media (min-width: 1200px) {
    .master-center-container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding-right: 45px;
        padding-left: 45px
    }
    .hidden-lg {
        display: none!important
    }
}
.center-block {
    clear: both;
    margin-bottom: 15px
}
.center-block div,
.center-block iframe {
    display: block!important;
    margin-right: auto;
    margin-left: auto
}
@media print {
    .hidden-print {
        display: none!important
    }
}
ul.iris-blue-bullets {
    padding: 0 0 0 1.1em;
    margin: 0
}
ul.iris-blue-bullets li {
    margin: 10px 0;
    color: #02abca
}
ul.iris-blue-bullets li:first-child {
    margin-top: 0
}
ul.iris-blue-bullets li span {
    color: #2a3334
}
ul.no-bullets {
    list-style-type: none
}
ul.no-bullets.li-margin>li {
    margin: 10px 0
}
ul.no-bullets.no-padding-left {
    padding-left: 0
}
.tool-tip {
    border-radius: 0 10px;
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    background-color: #00accc;
    padding: 0 12px;
    height: 30px;
    line-height: 30px
}
.tool-tip.tool-tip-point-left {
    margin-left: 15px
}
.tool-tip.tool-tip-point-left::before {
    content: ' ';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px;
    transform: rotate(-5deg);
    position: absolute;
    margin-left: -24px;
    margin-top: 7px;
    border-color: #00accc #00accc transparent transparent
}
strong {
    font-weight: 700
}
.field-roundedcorners,
.typeahead__field input.field-roundedcorners {
    border-radius: 0 15px
}
.typeahead__field .twitter-typeahead {
    width: 100%
}
.toggle .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px
}
.toggle .switch input {
    display: none
}
.toggle .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s
}
.toggle .slider:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s
}
.charactercount-textfield.body-field .charactercount,
.charactercount-textfield.title-field .charactercount {
    bottom: 0
}
.toggle .slider:after {
    content: "off";
    text-transform: uppercase;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 10px;
    width: 100%;
    color: #6c6d6e;
    font-weight: 700;
    text-align: right;
    padding-right: 8px
}
.toggle input[type=checkbox]:checked~.slider {
    background-color: #00accc
}
.toggle input[type=checkbox]:focus~.slider {
    box-shadow: 0 0 1px #00accc
}
.toggle input[type=checkbox]:checked~.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px)
}
.toggle input[type=checkbox]:checked~.slider:after {
    content: "on";
    text-align: left;
    padding-left: 9px;
    color: #fff
}
.toggle .slider.round {
    border-radius: 34px
}
.toggle .slider.round:before {
    border-radius: 50%
}
.fieldgroup {
    width: 100%;
    text-align: center
}
.fieldgroup .typeahead__container .typeahead__field .typeahead__query .twitter-typeahead {
    display: flex!important
}
.fieldgroup>.field,
.typeahead__field .fieldgroup>input.field {
    width: calc(100% - 50px)
}
.fieldgroup>.field.field-textplusbutton,
.typeahead__field .fieldgroup>input.field-textplusbutton.field {
    margin-bottom: 20px
}
.fieldgroup>.field.field-textplusbutton .button,
.typeahead__field .fieldgroup>input.field-textplusbutton.field .button {
    position: absolute
}
.fieldgroup>.field.field-textplusbutton .button.button-primary.button-addyouranswer,
.fieldgroup>.field.field-textplusbutton .button.button-primary.button-askyourquestion,
.typeahead__field .fieldgroup>input.field-textplusbutton.field .button.button-primary.button-addyouranswer,
.typeahead__field .fieldgroup>input.field-textplusbutton.field .button.button-primary.button-askyourquestion {
    top: 65px;
    right: calc(50% - 105px);
    width: 210px
}
.profileform-field>.field-container label.error,
label.error {
    color: #dd4b39;
    font-size: 14px;
    padding: 0;
    text-align: left;
    margin-bottom: 10px;
    display: flex
}
.profileform-field {
    display: flex;
    margin-bottom: 15px
}
.profileform-field>.field-container {
    margin: 0;
    width: 100%
}
.profileform-field>.field-container.half {
    width: 50%
}
.profileform-field.whoare-caringfor .field,
.profileform-field>.field-container .field,
.typeahead__field .profileform-field>.field-container input.field {
    width: 100%
}
.profileform-field>.field-container.half:first-child {
    margin-right: 15px
}
.profileform-field>.field-container label {
    font-size: 18px;
    line-height: 24px
}
.profileform-field.age .field {
    width: 40px
}
.profileform-field.living-arrangement {
    margin-bottom: 35px
}
.profileform-field.living-arrangement .field {
    width: 100%
}
.profileform-field.personal-info>p {
    width: 50%
}
.profileform-field.personal-info>p>input {
    width: 100%
}
.profileform-field.location {
    margin-bottom: 50px
}
.profileform-field.location .city {
    width: 80%;
    margin-right: 15px
}
.profileform-field.caregiver-status .field,
.profileform-field.job-status .field {
    width: 100%
}
.field,
.typeahead__field input.field {
    background-color: #E1EFEF;
    padding: 5px 16px;
    border: none;
    height: 40px;
    line-height: 30px
}
.field.field-white,
.typeahead__field input.field-white.field {
    background-color: #fff
}
.field.field-date,
.typeahead__field input.field-date.field {
    padding-right: 5px
}
.field.error,
.typeahead__field input.error.field {
    box-shadow: inset 0 0 1px 1px #dd4b39
}
.field.error:focus {
    box-shadow: inset 0 0 2px 2px #dd4b39
}
.field.field-dropdown,
.typeahead__field input.field-dropdown.field {
    border-radius: 0 15px;
    border-top-left-radius: 0!important;
    border-bottom-right-radius: 0!important;
    line-height: 30px;
    height: 40px;
    padding-left: 16px;
    padding-right: 38px;
    font-size: 18px;
    background-color: #E1EFEF;
    border: none
}
.field.field-dropdown.field-white {
    background-color: #fff
}
.field.field-dropdown>ul li,
.typeahead__field input.field-dropdown.field>ul li {
    font-size: 18px;
    font-weight: 200
}
.field.field-dropdown:focus {
    box-shadow: inset 0 0 1px 1px #00accc
}
.field.field-dropdown.nice-select .option.focus,
.field.field-dropdown.nice-select .option:focus,
.field.field-dropdown.nice-select .option:hover {
    background-color: #dbdbdb
}
.field.field-dropdown.nice-select:after {
    height: 12px;
    width: 12px;
    margin-top: -8px;
    right: 20px
}
.field.field-text,
.typeahead__field input.field-text.field {
    font-size: 18px
}
.field:focus,
.typeahead__field input.field:focus {
    border: none;
    outline: 0;
    box-shadow: inset 0 0 1px 1px #00accc
}
.field::-webkit-input-placeholder,
.typeahead__field input.field::-webkit-input-placeholder {
    color: #888;
    font-weight: 300;
    opacity: 1
}
.field::-moz-placeholder,
.typeahead__field input.field::-moz-placeholder {
    color: #888;
    font-weight: 300;
    opacity: 1
}
.field:-ms-input-placeholder,
.typeahead__field input.field:-ms-input-placeholder {
    color: #888;
    font-weight: 300;
    opacity: 1
}
.field:-moz-placeholder,
.typeahead__field input.field:-moz-placeholder {
    color: #888;
    font-weight: 300;
    opacity: 1
}
.charactercount-textfield .charactercount,
.charactercount-textfield:after {
    color: #999;
    z-index: 10;
    font-size: 14px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
select.dropdown.error+div.nice-select {
    box-shadow: inset 0 0 1px 1px #dd4b39
}
select.dropdown.error+div.nice-select:focus {
    box-shadow: inset 0 0 2px 2px #dd4b39
}
.field-list>.field,
.typeahead__field .field-list>input.field {
    margin-bottom: 15px
}
.field-list.field-list-centered {
    text-align: center
}
.charactercount-textfield {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #E1EFEF;
    border-radius: 0 16px
}
.charactercount-textfield.field-white,
.charactercount-textfield.question-mode {
    background-color: #fff
}
.charactercount-textfield:after {
    content: attr(data-charactercount);
    display: flex;
    align-self: flex-end;
    padding: 13px 16px 8px;
    font-weight: 400;
    line-height: 15px
}
.charactercount-textfield.title-field .title-content {
    max-width: 100%;
    margin-bottom: 0;
    padding: 15px 15px 30px;
    width: 100%
}
.charactercount-textfield.title-field .title-content::-webkit-input-placeholder {
    font-weight: 200
}
.charactercount-textfield.title-field .title-content::-moz-placeholder {
    font-weight: 200
}
.charactercount-textfield.title-field .title-content:-ms-input-placeholder {
    font-weight: 200
}
.charactercount-textfield.title-field .title-content:-moz-placeholder {
    font-weight: 200
}
.charactercount-textfield .charactercount {
    position: absolute;
    right: 0;
    text-align: right;
    padding-right: 20px;
    height: 30px;
    line-height: 30px
}
.charactercount-textfield .charactercount.charactercount-title {
    background-color: transparent;
    border-bottom-left-radius: 1000px
}
.charactercount-textfield .charactercount.charactercount-body {
    background-color: transparent
}
.button {
    border: none;
    padding: 5px 30px;
    cursor: pointer;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: inherit
}
.button.button-primary {
    height: 40px;
    line-height: 30px;
    background-color: #327176;
    color: #f3f7f7
}
.button.button-primary:focus {
    box-shadow: inset 0 0 1px 1px #00accc
}
.button.button-menu {
    background-color: #00accc;
    color: #fff;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: 700;
    padding: 8px 10px 6px;
    line-height: 11px
}
.button.button-online {
    font-weight: 600;
    background-color: #4ec2a6;
    padding: 5px 15px;
    color: #f0f1f1
}
.button.button-action {
    font-weight: 300;
    background-color: #007e98;
    padding: 5px 10px;
    color: #f0f1f1
}
.button.disabled {
    background-color: #eef5f6;
    color: #fff;
    cursor: no-drop
}
.button.button-info {
    background-color: #4ec2a6;
    color: #fff;
    padding: 5px 15px
}
ul.bluebulletpointlist {
    margin: 0;
    list-style: none;
    padding-left: 0;
    font-weight: 600;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 18px
}
ul.bluebulletpointlist li>div {
    font-size: 16px;
    vertical-align: middle;
    line-height: 22px
}
ul.bluebulletpointlist li {
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    font-size: 18px
}
ul.bluebulletpointlist li span {
    font-weight: 700
}
ul.bluebulletpointlist li:before {
    content: "●";
    color: #00accc;
    margin-right: 15px
}
[type=checkbox]:checked,
[type=checkbox]:not(:checked) {
    position: absolute;
    left: -9999px
}
[type=checkbox]:checked+label,
[type=checkbox]:not(:checked)+label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
    display: flex;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
[type=checkbox]:checked+label:before,
[type=checkbox]:not(:checked)+label:before {
    content: '';
    position: absolute;
    left: .2em;
    top: 0;
    width: 1em;
    height: 1em;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1)
}
[type=checkbox]:not(:checked)+label:before {
    border: 2px solid #dbdbdb;
    background: #fff
}
[type=checkbox]:checked+label:before {
    border: 2px solid #00bac5;
    background: #00bac5
}
[type=checkbox]:focus+label:before,
input:focus {
    box-shadow: inset 0 0 1px 1px #00accc
}
[type=checkbox]:checked:focus+label:before {
    border: none;
    box-shadow: inset 0 0 1px 1px #fff
}
[type=checkbox]:checked+label:after,
[type=checkbox]:not(:checked)+label:after {
    content: '\2713';
    font-weight: 700;
    position: absolute;
    top: .4em;
    left: .5em;
    font-size: .8em;
    line-height: .8;
    color: #fff;
    transition: all .2s
}
[type=checkbox]:not(:checked)+label:after {
    opacity: 0;
    transform: scale(0)
}
[type=checkbox]:checked+label:after {
    opacity: 1;
    transform: scale(1)
}
[type=checkbox]:disabled:checked+label:before,
[type=checkbox]:disabled:not(:checked)+label:before {
    box-shadow: none;
    border-color: #dbdbdb;
    background-color: #dbdbdb
}
[type=checkbox]:disabled:checked+label:after {
    color: #999
}
[type=checkbox]:disabled+label {
    color: #aaa
}
label.container {
    display: block;
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-weight: 200;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 15px
}
label.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer
}
label.container:hover input~.checkmark {
    background-color: #ccc
}
label.container input:checked~.checkmark {
    background-color: #00bac5
}
label.container input:checked~.checkmark:after {
    display: block
}
label.container .checkmark:after {
    top: 5px;
    left: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    content: "";
    position: absolute;
    display: none
}
label.container .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 50%
}
@media (min-width: 768px) {
    .fieldgroup {
        display: inline-flex
    }
    .fieldgroup.hidden {
        display: none
    }
    .fieldgroup>.field.field-textplusbutton,
    .typeahead__field .fieldgroup>input.field-textplusbutton.field {
        padding-right: 40px;
        margin-bottom: 0
    }
    .fieldgroup .ac-button.button-addyouranswer,
    .fieldgroup .button.button-addyouranswer,
    .fieldgroup>.field.field-textplusbutton .ac-button.button.button-primary.button-askyourquestion,
    .fieldgroup>.field.field-textplusbutton .button.button-primary.button-askyourquestion,
    .typeahead__field .fieldgroup>input.field-textplusbutton.field .ac-button.button.button-primary.button-askyourquestion,
    .typeahead__field .fieldgroup>input.field-textplusbutton.field .button.button-primary.button-askyourquestion {
        margin-left: -30px
    }
    .fieldgroup .ac-button.button-askyourquestion,
    .fieldgroup .button.button-askyourquestion {
        padding-right: 32px;
        padding-left: 32px;
        margin-left: -30px
    }
    .fieldgroup .ac-button.button-newslettersignup,
    .fieldgroup .button.button-newslettersignup {
        min-width: 135px;
        margin-left: -30px
    }
    .fieldgroup .ac-button.button-newslettersignup.no-field,
    .fieldgroup .button.button-newslettersignup.no-field {
        margin-left: 0
    }
    .fieldgroup .ac-button.button-menu,
    .fieldgroup .button.button-menu {
        background-color: #00accc;
        color: #f3f7f7;
        padding: 7px 13px;
        height: 31px;
        font-size: 14px;
        font-weight: 400;
        margin-top: 4px
    }
}
.rounded-button,
.rounded-input {
    display: block;
    outline: 0;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.rounded-input {
    border-radius: 0 15px;
    border: none;
    height: 40px;
    line-height: 40px;
    padding: 5px 15px;
    font-size: 18px;
    color: #2a3334;
    font-weight: 400
}
.rounded-input.join-to-button {
    z-index: 1
}
.rounded-input.text-area {
    line-height: 1.15em;
    width: 100%;
    height: 190px
}
.rounded-input.error {
    box-shadow: inset 0 0 1px 1px #dd4b39
}
.rounded-input.error:focus {
    box-shadow: inset 0 0 2px 2px #dd4b39
}
.rounded-button:focus,
.rounded-input:focus {
    box-shadow: inset 0 0 1px 1px #00accc
}
.field::-webkit-input-placeholder,
.rounded-input::-webkit-input-placeholder,
.typeahead__field input.field::-webkit-input-placeholder {
    color: #888;
    font-size: 16px
}
.field::-moz-placeholder,
.rounded-input::-moz-placeholder,
.typeahead__field input.field::-moz-placeholder {
    color: #888;
    font-size: 16px;
    font-weight: lighter
}
.field:-ms-input-placeholder,
.rounded-input:-ms-input-placeholder,
.typeahead__field input.field:-ms-input-placeholder {
    color: #888!important;
    font-size: 16px!important;
    font-weight: lighter!important
}
.field:-moz-placeholder,
.rounded-input:-moz-placeholder,
.typeahead__field input.field:-moz-placeholder {
    color: #888;
    font-size: 16px;
    font-weight: lighter;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif
}
.rounded-button {
    border-radius: 0 15px;
    border: none;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    color: #eef0ee;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box
}
.rounded-button.rounded-button-primary {
    background-color: #327176;
    color: #eef0ee
}
.rounded-button.rounded-button-search {
    background-color: #2c4446;
    color: #eef0ee
}
.rounded-button.rounded-button-standard {
    background-color: #eef0ee;
    color: #fff
}
.rounded-button.rounded-button-info {
    background-color: #4ec2a6;
    color: #fff
}
.rounded-button.join-to-input {
    z-index: 2
}
.rounded-button:hover {
    text-decoration: none
}
@media (min-width: 768px) {
    .rounded-input {
        border: none;
        height: 40px;
        line-height: 40px
    }
    .rounded-input.join-to-button {
        padding-right: 40px
    }
    .rounded-input.text-area {
        height: 240px
    }
    .rounded-button.join-to-input {
        margin-left: -30px;
        min-width: 145px
    }
}
.place-holder-swamp::-webkit-input-placeholder {
    color: #2a3334!important
}
.place-holder-swamp::-moz-placeholder {
    color: #2a3334!important
}
.place-holder-swamp:-ms-input-placeholder {
    color: #2a3334!important
}
.place-holder-swamp:-moz-placeholder {
    color: #2a3334!important
}
.show-on-printview {
    display: none
}
@media print {
    .show-on-printview {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 45px
    }
    .show-on-printview svg {
        height: 60px;
        width: 400px
    }
    .Article-Content .action-bar {
        padding-bottom: 0!important
    }
    .Article-Content .action-bar time.dateitem {
        margin-left: 0!important
    }
    .Article-Content .action-bar time.dateitem:not(:empty) {
        padding-bottom: 22px
    }
    @page {
        margin: 1cm
    }
    .action-qtip .qtip-content,
    .no-print,
    .no-print * {
        display: none!important
    }
    .content,
    .thread,
    body {
        overflow-y: visible;
        padding-right: 60px;
        -webkit-print-color-adjust: exact
    }
    .thread .threadheader-wrapper {
        page-break-after: avoid
    }
    .thread .thread-content .reply-container {
        width: calc(100% - 20px)!important;
        margin-left: 20px!important;
        padding-left: 55px!important
    }
    a[href]:after {
        content: " (" attr(href) ")"
    }
    .rail-container .rail-left {
        width: 100%!important;
        padding-right: 30px
    }
    .action-bar time.dateitem {
        margin-left: 75px
    }
    .content-indented {
        padding-left: 75px!important
    }
    .speechbubble.speechbubble-arrowbottomright.speechbubble-threadcount {
        background-color: #fff;
        font-size: 40px!important;
        color: #0EC6D2;
        font-weight: 700!important;
        height: 35px!important;
        width: 35px!important;
        margin-bottom: 0
    }
    .speechbubble.speechbubble-arrowbottomright.speechbubble-threadcount:before {
        display: none
    }
}
.ad-bottom-medium-rectangle::before,
.ad-top-leader-board::before,
.ad-top-medium-rectangle::before,
.in-article-1::before,
.in-article-2::before {
    text-align: center;
    display: block;
    content: 'ADVERTISEMENT';
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 4px;
    color: #aaa
}
.container-fullwidth {
    overflow-y: hidden;
    position: relative;
    width: 100%
}
.container-fullwidth.overflow-visible {
    overflow: visible
}
.container-fullwidth .container-fullwidthleft,
.container-fullwidth .container-fullwidthright {
    width: 100%
}
.container-fullwidth .master-center-container {
    position: relative
}
.container-fullwidth .answerquestion-indentedcontainer {
    padding-left: 0;
    width: 100%
}
.container-fullwidth.answerthread-compactverison {
    width: calc(100% + 30px);
    margin-left: -15px
}
.container-fullwidth.answerthread-compactverison .fields-container {
    width: 100%
}
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .editor-actions,
.container-fullwidth.container-startthread .editor-container.fullscreen .contentmaker .answerquestion .standalone-container .ql-toolbar.ql-snow {
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: -15px;
    width: calc(100% + 30px);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#0190ad', endColorstr='#017f98', GradientType=1)
}
.container-fullwidth.container-startthread {
    background-color: #36bcd5;
    overflow-x: hidden
}
.container-fullwidth.container-startthread .editor-container,
.container-fullwidth.container-startthread.answerthread-compactverison {
    background-color: #E1EFEF
}
.container-fullwidth.container-startthread .editor-container.fullscreen .contentmaker .editor-actions .backbutton {
    top: 7px
}
.container-fullwidth.container-startthread .editor-container.fullscreen .contentmaker .answerquestion .standalone-container .snowcontainer {
    margin-top: 10px
}
.container-fullwidth.container-startthread .editor-container.fullscreen .contentmaker .answerquestion .standalone-container .ql-toolbar.ql-snow {
    background: #0190ad;
    background: -moz-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: -webkit-gradient(left top, right top, color-stop(0, #007e98), color-stop(15%, #007e98), color-stop(40%, #06afcb), color-stop(75%, #64ca9b), color-stop(81%, #64ca9b), color-stop(100%, #64ca9b));
    background: -webkit-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: -o-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: -ms-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: linear-gradient(to right, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%)
}
.container-fullwidth.container-startthread .editor-container.fullscreen .contentmaker .answerquestion .standalone-container .ql-toolbar.ql-snow .ql-formats {
    margin-top: -10px
}
.container-fullwidth.container-startthread .master-center-container {
    display: flex
}
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .askquestion .standalone-container .ql-toolbar.ql-snow,
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .editor-actions .backbutton {
    display: none
}
.container-fullwidth.container-startthread .fields-container .fieldgroup input[type=text] {
    background-color: #fff;
    margin-bottom: 16px
}
.container-fullwidth.container-startthread .speechbubble.speechbubble-answerquestioncutted {
    position: absolute;
    bottom: -375px;
    right: calc(50% - 172px)
}
.container-fullwidth.container-startthread .speechbubble.speechbubble-answerquestioncutted>.followanswers-link {
    position: absolute;
    top: 51px;
    left: 148px;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    cursor: pointer
}
.container-fullwidth.container-startthread .speechbubble.speechbubble-answerquestioncutted>.speechbubble-follow {
    position: absolute;
    top: 39px;
    left: 96px;
    font-weight: 700;
    font-size: 20px
}
.container-fullwidth.container-askquestion {
    background-color: #36bcd5;
    padding-bottom: 40px;
    padding-top: 10px
}
.container-fullwidth.container-askquestion .fieldgroup {
    padding-top: 40px
}
.container-fullwidth.container-askquestion .editor-container {
    background-color: #36bcd5
}
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .editor-actions {
    background: #0190ad;
    background: -moz-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: -webkit-gradient(left top, right top, color-stop(0, #007e98), color-stop(15%, #007e98), color-stop(40%, #06afcb), color-stop(75%, #64ca9b), color-stop(81%, #64ca9b), color-stop(100%, #64ca9b));
    background: -webkit-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: -o-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: -ms-linear-gradient(left, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%);
    background: linear-gradient(to right, #007e98 0, #007e98 15%, #06afcb 40%, #64ca9b 75%, #64ca9b 81%, #64ca9b 100%)
}
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .askquestion {
    padding-top: 10px
}
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .askquestion .cancel {
    top: -39px
}
.container-fullwidth.container-askquestion .editor-container.fullscreen .contentmaker .askquestion .standalone-container .snowcontainer {
    margin-top: 10px;
    height: calc(100vh - 165px)
}
.container-fullwidth.container-newsletter {
    background-color: #2c4446;
    font-family: "Kamerik 105";
    color: #d1dee1;
    padding-top: 30px;
    padding-bottom: 30px
}
.container-fullwidth.container-newsletter .container-calltoaction {
    margin-bottom: 30px
}
.container-fullwidth.container-newsletter .container-calltoaction .subscribe {
    font-size: 38px;
    font-weight: 200;
    line-height: 35px;
    margin-bottom: 35px
}
.container-fullwidth.container-newsletter .container-calltoaction strong {
    font-size: 36px;
    font-weight: 700
}
.container-fullwidth.container-newsletter .container-calltoaction .field {
    width: 100%
}
.container-fullwidth.container-newsletter .container-followus {
    width: 180px;
    margin: 0 auto;
    padding-top: 45px;
    border-top: solid 1px #2a3334
}
.container-fullwidth.container-newsletter .container-followus .followus-calltoaction {
    font-weight: 200;
    font-size: 38px;
    font-family: "Kamerik 105";
    margin-bottom: 20px
}
.container-fullwidth.container-newsletter .container-followus svg {
    margin-left: 18px;
    cursor: pointer;
    height: 28px;
    width: 28px
}
.peak-wrapper::before,
.triangle-container .bordertriangle::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 0
}
.container-fullwidth.container-newsletter .fieldgroup label.error {
    bottom: -30px;
    margin-top: -15px;
    color: #f3f7f7;
    margin-bottom: 10px
}
.peak-wrapper {
    position: relative
}
.peak-wrapper::before {
    border-width: 10px 0 10px 20px;
    transform: rotate(27deg);
    display: block;
    position: absolute;
    top: -12px;
    left: 30px
}
.triangle-container.container-fullwidth {
    overflow: visible;
    display: inline-block
}
.triangle-container .bordertriangle {
    overflow: visible;
    display: flex
}
.triangle-container .bordertriangle.master-center-container {
    position: relative
}
.triangle-container .bordertriangle::before {
    display: block;
    border-width: 21px 0 15px 25px;
    border-color: #E1EFEF;
    transform: rotate(-54deg);
    position: absolute;
    top: -9px;
    left: 15px
}
@media (min-width: 768px) {
    .container-fullwidth.answerthread-compactverison {
        border-bottom-left-radius: 30px;
        width: 100%;
        margin-left: 0
    }
    .container-fullwidth.answerthread-compactverison .fields-container {
        width: 100%
    }
    .container-fullwidth .container-fullwidthleft {
        width: calc(100% - 421px);
        float: left;
        margin-bottom: 0
    }
    .container-fullwidth .container-fullwidthright {
        width: 350px;
        float: right
    }
    .container-fullwidth .answerquestion-indentedcontainer {
        padding-left: 105px;
        width: calc(100% - 400px)
    }
    .container-fullwidth.container-startthread .speechbubble.speechbubble-answerquestioncutted {
        right: 25px;
        bottom: -290px
    }
    .container-fullwidth.container-startthread .fields-container .fieldgroup input[type=text] {
        margin-bottom: 0
    }
    .container-fullwidth.container-askquestion .field-read-only {
        cursor: pointer
    }
    .container-fullwidth.container-askquestion>div {
        display: flex;
        justify-content: center;
        align-items: center
    }
    .container-fullwidth.container-askquestion .askquestion-indentedcontainer {
        width: 80%
    }
    .container-fullwidth.container-askquestion .askquestion-indentedcontainer .fieldgroup {
        width: 100%
    }
    .container-fullwidth.container-newsletter {
        height: 200px;
        padding-top: 50px
    }
    .container-fullwidth.container-newsletter .container-calltoaction {
        z-index: 15;
        position: absolute;
        width: 575px;
        top: -15px;
        left: 70px;
        margin-bottom: 0
    }
    .container-fullwidth.container-newsletter .container-calltoaction .subscribe {
        margin-bottom: 15px
    }
    .container-fullwidth.container-newsletter .container-followus {
        padding-left: 70px;
        border: none;
        padding-top: 0;
        border-left: solid 1px #2a3334;
        width: 350px;
        margin-top: 15px
    }
    .container-fullwidth.container-newsletter .container-followus svg {
        margin-right: 23px;
        margin-left: 0
    }
    .container-fullwidth.container-newsletter .fieldgroup label.error {
        position: absolute
    }
    .triangle-container.answerthread-compactverison .bordertriangle::before {
        left: 50px
    }
    .triangle-container .bordertriangle::before {
        left: 145px
    }
}
.forum .findcarehousing {
    margin-top: 32px;
    margin-bottom: 0
}
.forum hr,
.forumList hr {
    border-top: 1px solid #ddd;
    margin-bottom: 32px
}
.forum .sectionHeader {
    padding-top: 40px
}
.forum hr {
    margin-top: 32px
}
.forum .readMore {
    margin-top: -16px
}
.forum .readMore a {
    position: relative;
    text-decoration: none
}
.forum .readMore a:after {
    content: "∟";
    transform: rotate(-135deg);
    font-size: 14px;
    position: absolute;
    height: 0;
    line-height: 4px;
    bottom: 10px;
    margin-left: 2px;
    color: #0095bc;
    display: inline-block
}
.forum .readMore a:hover {
    text-decoration: underline
}
.forum .readMore a:after,
.forum .readMore a:hover:after {
    text-decoration: none
}
.forumList .findcarehousing {
    margin-top: 0
}
.forumList hr {
    margin-top: 32px
}
@media (min-width: 768px) {
    .forumList .findcarehousing {
        margin-top: 48px
    }
}
.mfp-bg {
    background-color: rgba(255, 255, 255, .7)!important;
    opacity: .7!important
}
.mfp-container {
    padding: 0!important
}
.nice-select {
    -webkit-tap-highlight-color: transparent;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    display: block;
    float: left;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    height: 42px;
    line-height: 40px;
    outline: 0;
    padding-left: 18px;
    padding-right: 30px;
    position: relative;
    text-align: left!important;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto
}
.nice-select:hover {
    border-color: #dbdbdb
}
.nice-select.open,
.nice-select:active,
.nice-select:focus {
    border-color: #999
}
.nice-select:after {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
    content: '';
    display: block;
    height: 5px;
    margin-top: -4px;
    pointer-events: none;
    position: absolute;
    right: 12px;
    top: 50%;
    -webkit-transform-origin: 66% 66%;
    -ms-transform-origin: 66% 66%;
    transform-origin: 66% 66%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    width: 5px
}
.nice-select.open:after {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg)
}
.nice-select.open .list {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0)
}
.nice-select.disabled {
    border-color: #ededed;
    color: #999;
    pointer-events: none
}
.nice-select.disabled:after {
    border-color: #ccc
}
.nice-select.wide {
    width: 100%
}
.nice-select.wide .list {
    left: 0!important;
    right: 0!important
}
.nice-select.right {
    float: right
}
.nice-select.right .list {
    left: auto;
    right: 0
}
.nice-select.small {
    font-size: 12px;
    height: 36px;
    line-height: 34px
}
.nice-select.small:after {
    height: 4px;
    width: 4px
}
.nice-select.small .option {
    line-height: 34px;
    min-height: 34px
}
.nice-select .list {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(68, 68, 68, .11);
    box-sizing: border-box;
    margin-top: 4px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(.75) translateY(-21px);
    -ms-transform: scale(.75) translateY(-21px);
    transform: scale(.75) translateY(-21px);
    -webkit-transition: all .2s cubic-bezier(.5, 0, 0, 1.25), opacity .15s ease-out;
    transition: all .2s cubic-bezier(.5, 0, 0, 1.25), opacity .15s ease-out;
    z-index: 9
}
.nice-select .list:hover .option:not(:hover) {
    background-color: transparent!important
}
.nice-select .option {
    cursor: pointer;
    font-weight: 400;
    line-height: 40px;
    list-style: none;
    min-height: 40px;
    outline: 0;
    padding-left: 18px;
    padding-right: 29px;
    text-align: left;
    -webkit-transition: all .2s;
    transition: all .2s
}
.nice-select .option.focus,
.nice-select .option.selected.focus,
.nice-select .option:hover {
    background-color: #f6f6f6
}
.nice-select .option.selected {
    font-weight: 700
}
.nice-select .option.disabled {
    background-color: transparent;
    color: #999;
    cursor: default
}
.no-csspointerevents .nice-select .list {
    display: none
}
.no-csspointerevents .nice-select.open .list {
    display: block
}
</style>
