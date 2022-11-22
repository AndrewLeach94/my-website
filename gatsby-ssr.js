/* Note: Commenting this all out for now... bug seems to have been resolved but I'll leave this code 
here in case to be deleted later */

// import React from "react"


// /* this exists only to force the theme into "light" mode on initial load to fix a styled-components
//  gatsby hydration bug when the site initially renders in dark mode - I'd like to look 
//  into alternatives */
// const MagicScriptTag = () => {
//     const codeToRunOnClient = `
//   (function() {
//     localStorage.setItem("prefersDarkMode", false);
//   })()
//     `;
//     // eslint-disable-next-line react/no-danger
//     return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
//   };
//   export const onRenderBody = ({ setPreBodyComponents }) => {
//     setPreBodyComponents(<MagicScriptTag />);
//   };