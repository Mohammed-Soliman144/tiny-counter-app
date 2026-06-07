// fontsource package contain only raw css and font files but not contain code type declarations (.d.ts)
// make typescript ignore type checking for foutsource package

// // register fontsource packages import as safe side-effect
// declare module "@fontsource/*" {}
// declare module "@fontsource-variable/*" {}
// use npm install @fontsource-variable/inter => Cause lag bug which browser in each refresh or remounting takes 230ms as lag before browser painting - so most common consider best practice is use local file in public file and use font-display: swap (enhance performance remove root cause)

// keeps standards css imports safe too
declare module "*.css"
