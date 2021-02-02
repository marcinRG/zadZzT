// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
const cache = {};
import {templates} from "./app";

function getTemplate(str) {
    let elem = document.getElementById(str) && document.getElementById(str).innerHTML;
    return elem || templates[str];
}

export const engine = (str, data) => {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    //const fn = !/\W/.test(str) ? cache[str] = cache[str] || engine(document.getElementById(str).innerHTML) :
    const fn = !/\W/.test(str) ? cache[str] = cache[str] || engine(getTemplate(str)) :
        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +
            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +
            // Convert the template into pure JavaScript
            str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'")
            + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn(data) : fn;
};
