var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 台中行政區'
            });
var format_2500_2 = new ol.format.GeoJSON();
var features_2500_2 = format_2500_2.readFeatures(json_2500_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2500_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2500_2.addFeatures(features_2500_2);
var lyr_2500_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2500_2, 
                style: style_2500_2,
                interactive: true,
    title: '火車站周圍2500人口圖<br />\
    <img src="styles/legend/2500_2_0.png" /> 1,2,4,5,6,7,8,9,10,11,17,18,19,23,27,30,36,44,46,48,49,50<br />\
    <img src="styles/legend/2500_2_1.png" /> 52,54,55,56,59,60,61,62,64,66,68,70<br />\
    <img src="styles/legend/2500_2_2.png" /> 71,72,73,75,76,77,78,79<br />\
    <img src="styles/legend/2500_2_3.png" /> 80,81,83,85,87,89,90,91,92,94,95,96,97,99,100<br />\
    <img src="styles/legend/2500_2_4.png" /> 101,102,103,104,105,106,107,108,109<br />\
    <img src="styles/legend/2500_2_5.png" /> 111,112,113,114,115,116,117,118,120,121,122,123,124,125,126,127,128,129,130<br />\
    <img src="styles/legend/2500_2_6.png" /> 131,132,133,134,135,136,137,138<br />\
    <img src="styles/legend/2500_2_7.png" /> 139,140,141,143,144,145,146,147,148,149,150<br />\
    <img src="styles/legend/2500_2_8.png" /> 151,152,154,155,156,157,158,159,160,161,163,165,166,167,168<br />\
    <img src="styles/legend/2500_2_9.png" /> 169,170,171,172,173,174,175,176,177,178,179<br />\
    <img src="styles/legend/2500_2_10.png" /> 180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199<br />\
    <img src="styles/legend/2500_2_11.png" /> 201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219<br />\
    <img src="styles/legend/2500_2_12.png" /> 220,222,223,224,227,228,229,230,231,232,233,234,235,236,237,238,239,240<br />\
    <img src="styles/legend/2500_2_13.png" /> 241,242,243,244,245,246,247,248,249<br />\
    <img src="styles/legend/2500_2_14.png" /> 250,251,253,254,255,257,261,262,263,264,265,266,267,268,269,270<br />\
    <img src="styles/legend/2500_2_15.png" /> 271,272,273,274,275,276<br />\
    <img src="styles/legend/2500_2_16.png" /> 277,279,280,281,282,283,284,285,286,287,289<br />\
    <img src="styles/legend/2500_2_17.png" /> 290,292,294,296,298,299<br />\
    <img src="styles/legend/2500_2_18.png" /> 300,301,302,303,304,305,307,308,309,310,312,313,314,315,316,318,319,320<br />\
    <img src="styles/legend/2500_2_19.png" /> 321,322,325,327,328,329,330,331,332,333,334,335,336,337,338,339,341,345,349<br />\
    <img src="styles/legend/2500_2_20.png" /> 350,352,353,355,356,357,358,360,361,364,366,367,368,369,370<br />\
    <img src="styles/legend/2500_2_21.png" /> 371,372,375,376,379,381,382,383,388,391,392,395,397,398<br />\
    <img src="styles/legend/2500_2_22.png" /> 400,401,403,404,407,408,409,411,415,416,417,418,419,421,425,426,429<br />\
    <img src="styles/legend/2500_2_23.png" /> 432,434,435,436,443,444,454,457,461,467<br />\
    <img src="styles/legend/2500_2_24.png" /> 470,479,482,485,486,496,497,503,511,516,517,525<br />\
    <img src="styles/legend/2500_2_25.png" /> 528,533,537,547<br />\
    <img src="styles/legend/2500_2_26.png" /> 557,567,579,602,628,710<br />\
    <img src="styles/legend/2500_2_27.png" /> 730,758,789,790<br />\
    <img src="styles/legend/2500_2_28.png" /> 840,1026,1043,1138<br />\
    <img src="styles/legend/2500_2_29.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_2500_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_2500_2];
lyr__1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', '區名': '區名', '里名': '里名', '區里名': '區里名', '區代碼': '區代碼', '里代碼': '里代碼', });
lyr_2500_2.set('fieldAliases', {'fid': 'fid', 'U_ID': 'U_ID', 'CODEBASE': 'CODEBASE', 'CODE1': 'CODE1', 'CODE2': 'CODE2', 'TOWN_ID': 'TOWN_ID', 'TOWN': 'TOWN', 'COUNTY_ID': 'COUNTY_ID', 'COUNTY': 'COUNTY', 'X': 'X', 'Y': 'Y', 'AREA': 'AREA', '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode': '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode', '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode': '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode', '臺中市統計區人口統計_最小統計區 工作表1_InCountyId': '臺中市統計區人口統計_最小統計區 工作表1_InCountyId', '臺中市統計區人口統計_最小統計區 工作表1_OutTotal': '臺中市統計區人口統計_最小統計區 工作表1_OutTotal', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME': '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME', '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE': '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC': '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC', '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT': '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT', '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME': '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME', '臺中市統計區人口統計_最小統計區 工作表1_CODE2': '臺中市統計區人口統計_最小統計區 工作表1_CODE2', '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE': '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE', '臺中市統計區人口統計_最小統計區 工作表1_H_CNT': '臺中市統計區人口統計_最小統計區 工作表1_H_CNT', '臺中市統計區人口統計_最小統計區 工作表1_P_CNT': '臺中市統計區人口統計_最小統計區 工作表1_P_CNT', '臺中市統計區人口統計_最小統計區 工作表1_M_CNT': '臺中市統計區人口統計_最小統計區 工作表1_M_CNT', '臺中市統計區人口統計_最小統計區 工作表1_F_CNT': '臺中市統計區人口統計_最小統計區 工作表1_F_CNT', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', '區名': 'TextEdit', '里名': 'TextEdit', '區里名': 'TextEdit', '區代碼': 'TextEdit', '里代碼': 'TextEdit', });
lyr_2500_2.set('fieldImages', {'fid': 'TextEdit', 'U_ID': 'TextEdit', 'CODEBASE': 'TextEdit', 'CODE1': 'TextEdit', 'CODE2': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'COUNTY': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'AREA': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_InCountyId': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_OutTotal': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_CODE2': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_H_CNT': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_P_CNT': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_M_CNT': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_F_CNT': 'Range', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', '區名': 'inline label', '里名': 'inline label', '區里名': 'no label', '區代碼': 'no label', '里代碼': 'no label', });
lyr_2500_2.set('fieldLabels', {'fid': 'no label', 'U_ID': 'no label', 'CODEBASE': 'no label', 'CODE1': 'no label', 'CODE2': 'no label', 'TOWN_ID': 'no label', 'TOWN': 'no label', 'COUNTY_ID': 'no label', 'COUNTY': 'no label', 'X': 'no label', 'Y': 'no label', 'AREA': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_InCountyId': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_OutTotal': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_CODE2': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_H_CNT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_P_CNT': 'inline label', '臺中市統計區人口統計_最小統計區 工作表1_M_CNT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_F_CNT': 'no label', });
lyr_2500_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});