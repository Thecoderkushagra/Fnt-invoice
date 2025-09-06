import myLogo from './invoice-logo.png';
import template1 from './template-1.jpg'
import template2 from './template-2.jpg'
import template3 from './template-3.png'

export const allAsset = {
    myLogo,
    template1,
    template2,
    template3
};

export const templates = [
    {id: "template1", lable:"Template 1", image:allAsset.template1},
    {id: "template2", lable:"Template 2", image:allAsset.template2},
    {id: "template3", lable:"Template 3", image:allAsset.template3}
];