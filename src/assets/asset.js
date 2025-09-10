import myLogo from './invoice-logo.png';
import template1 from './template-1.png';
import template2 from './template-2.png';
import template3 from './template-3.png';
import template4 from './template-4.png';
import template5 from './template-5.png';

export const allAsset = {
    myLogo,
    template1,
    template2,
    template3,
    template4,
    template5
};

export const templates = [
    {id: "template1", lable:"Template 1", image:allAsset.template1},
    {id: "template2", lable:"Template 2", image:allAsset.template2},
    {id: "template3", lable:"Template 3", image:allAsset.template3},
    {id: "template4", lable:"Template 4", image:allAsset.template4},
    {id: "template5", lable:"Template 5", image:allAsset.template5}
];