for(var i = 0; i < 158; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PantallaInicio.html');

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u40','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u25')) == ('pd1u25')))) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u30')) == ('pd1u30')))) {

	SetPanelState('u40', 'pd2u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u35')) == ('pd1u35')))) {

	SetPanelState('u40', 'pd3u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u30')) == ('pd1u30'))))) {

	SetPanelState('u40', 'pd4u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd5u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd6u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u25')) == ('pd1u25')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35')))))) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u27'] = 'center';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u40','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u25')) == ('pd1u25')))) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u30')) == ('pd1u30')))) {

	SetPanelState('u40', 'pd2u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u35')) == ('pd1u35')))) {

	SetPanelState('u40', 'pd3u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u30')) == ('pd1u30'))))) {

	SetPanelState('u40', 'pd4u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd5u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd6u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u25')) == ('pd1u25')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35')))))) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u129'] = 'top';document.getElementById('u31_img').tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u40','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u25')) == ('pd1u25')))) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u30')) == ('pd1u30')))) {

	SetPanelState('u40', 'pd2u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u35')) == ('pd1u35')))) {

	SetPanelState('u40', 'pd3u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u30')) == ('pd1u30'))))) {

	SetPanelState('u40', 'pd4u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd5u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd6u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u25')) == ('pd1u25')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35')))))) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u32'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u40','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u25')) == ('pd1u25')))) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u30')) == ('pd1u30')))) {

	SetPanelState('u40', 'pd2u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u35')) == ('pd1u35')))) {

	SetPanelState('u40', 'pd3u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u30')) == ('pd1u30'))))) {

	SetPanelState('u40', 'pd4u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd5u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd6u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u25')) == ('pd1u25')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35')))))) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u40','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u25')) == ('pd1u25')))) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u30')) == ('pd1u30')))) {

	SetPanelState('u40', 'pd2u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u35')) == ('pd1u35')))) {

	SetPanelState('u40', 'pd3u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u30')) == ('pd1u30'))))) {

	SetPanelState('u40', 'pd4u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd5u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd6u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u25')) == ('pd1u25')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35')))))) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u37'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelState('u35', 'pd1u35','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u40','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u25')) == ('pd1u25')))) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u30')) == ('pd1u30')))) {

	SetPanelState('u40', 'pd2u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u35')) == ('pd1u35')))) {

	SetPanelState('u40', 'pd3u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u30')) == ('pd1u30'))))) {

	SetPanelState('u40', 'pd4u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u25')) == ('pd1u25')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd5u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35'))))) {

	SetPanelState('u40', 'pd6u40','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u25')) == ('pd1u25')) && (((GetPanelState('u30')) == ('pd1u30')) && ((GetPanelState('u35')) == ('pd1u35')))))) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u153'] = 'center';