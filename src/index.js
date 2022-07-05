import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer('06 october 2022');
menu();
modal();
forms();
tabs();
slider();
calc(100);
sendForm({
    formId: 'form1'
});
sendForm({
    formId: 'form2'
});
sendForm({
    formId: 'form3'
});
