
//basic map config with custom fills, mercator projection
var map = new Datamap({
	scope: 'world',
	element: document.getElementById('container1'),
	projection: 'mercator',
	geographyConfig: {
		highlightBorderColor: '#666666',
		popupTemplate: function(geography, data) {
			if (data != null) return "<div class='hoverinfo'>" + geography.properties.name+': '+data.visitors +'</div>'
	},
	highlightBorderWidth: 1
	},
fills: { 
defaultFill: '#CCCCCC', 
CHE: '#f3f8fe',
SVN: '#f7fbff',
NZL: '#f7fbff',
SWE: '#f5fafe',
ISL: '#f7fbff',
PER: '#f7fbff',
CAN: '#f0f6fd',
CHN: '#f1f7fd',
BLR: '#f7fbff',
FRA: '#f0f6fd',
LVA: '#f7fbff',
HKG: '#f7fbff',
HND: '#f7fbff',
ZMB: '#f7fbff',
VNM: '#f7fbff',
CYP: '#f7fbff',
KWT: '#f7fbff',
SRB: '#f7fbff',
MTQ: '#f7fbff',
CZE: '#f7fbff',
CUW: '#f7fbff',
BFA: '#f7fbff',
DMA: '#f7fbff',
AUS: '#f3f8fe',
SWZ: '#f7fbff',
LTU: '#f7fbff',
MKD: '#f7fbff',
BHS: '#f7fbff',
TTO: '#f7fbff',
MNG: '#f7fbff',
BGD: '#f7fbff',
BEL: '#f6faff',
ZAF: '#f7fbff',
GHA: '#f7fbff',
FRO: '#f7fbff',
ECU: '#f7fbff',
LIE: '#f7fbff',
NGA: '#f7fbff',
MAR: '#f7fbff',
PRI: '#f7fbff',
PAN: '#f7fbff',
TUR: '#f5f9fe',
MYS: '#f7fbff',
NPL: '#f7fbff',
KOR: '#f5f9fe',
BRA: '#f0f6fd',
NOR: '#f7fbff',
BGR: '#f7fbff',
GEO: '#f7fbff',
SYR: '#f7fbff',
JPN: '#f0f6fd',
TJK: '#f7fbff',
TWN: '#f5fafe',
NLD: '#f4f9fe',
TUN: '#f7fbff',
ARG: '#f7fbff',
OMN: '#f7fbff',
LKA: '#f7fbff',
DOM: '#f7fbff',
EST: '#f7fbff',
NIC: '#f7fbff',
CMR: '#f7fbff',
DNK: '#f5fafe',
ITA: '#f4f9fe',
BHR: '#f7fbff',
GRD: '#f7fbff',
BEN: '#f7fbff',
ETH: '#f7fbff',
SDN: '#f7fbff',
KAZ: '#f7fbff',
GRL: '#f7fbff',
LSO: '#f7fbff',
SEN: '#f7fbff',
LBY: '#f7fbff',
CRI: '#f7fbff',
BLZ: '#f7fbff',
MUS: '#f7fbff',
BIH: '#f7fbff',
MDG: '#f7fbff',
LBR: '#f7fbff',
DZA: '#f7fbff',
PAK: '#f7fbff',
LBN: '#f7fbff',
USA: '#c6dbef',
BMU: '#f7fbff',
GUM: '#f7fbff',
VEN: '#f7fbff',
EGY: '#f7fbff',
AUT: '#f5f9fe',
QAT: '#f7fbff',
GTM: '#f7fbff',
ESP: '#f4f9fe',
HUN: '#f7fbff',
AZE: '#f7fbff',
BOL: '#f7fbff',
HRV: '#f7fbff',
ALB: '#f7fbff',
GBR: '#e7f1fa',
SLV: '#f7fbff',
THA: '#f7fbff',
GUY: '#f7fbff',
COL: '#f5f9fe',
MAC: '#f7fbff',
ISR: '#f5fafe',
MLT: '#f7fbff',
RUS: '#f5f9fe',
GRC: '#f7fbff',
PRT: '#f7fbff',
MLI: '#f7fbff',
SGP: '#f5fafe',
DEU: '#e3eef8',
IRL: '#f7fbff',
TKM: '#f7fbff',
IDN: '#f7fbff',
REU: '#f7fbff',
CIV: '#f7fbff',
IRN: '#f6faff',
SVK: '#f7fbff',
MDA: '#f7fbff',
IND: '#eff6fc',
PHL: '#f7fbff',
ROU: '#f7fbff',
FIN: '#f6faff',
UZB: '#f7fbff',
CHL: '#f7fbff',
POL: '#f5fafe',
UKR: '#f7fbff',
LUX: '#f7fbff',
URY: '#f7fbff',
ARM: '#f7fbff',
TZA: '#f7fbff',
KEN: '#f7fbff',
CUB: '#f7fbff',
SAU: '#f7fbff',
ARE: '#f7fbff',
IRQ: '#f7fbff',
MMR: '#f7fbff',
MEX: '#f5f9fe',
UGA: '#f7fbff',
JOR: '#f7fbff',
},data: { 
CHE: {fillKey: 'CHE', visitors: 559, country: " Switzerland " },
SVN: {fillKey: 'SVN', visitors: 30, country: " Slovenia " },
NZL: {fillKey: 'NZL', visitors: 80, country: " New Zealand " },
SWE: {fillKey: 'SWE', visitors: 272, country: " Sweden " },
ISL: {fillKey: 'ISL', visitors: 6, country: " Iceland " },
PER: {fillKey: 'PER', visitors: 27, country: " Peru " },
CAN: {fillKey: 'CAN', visitors: 989, country: " Canada " },
CHN: {fillKey: 'CHN', visitors: 927, country: " China " },
BLR: {fillKey: 'BLR', visitors: 12, country: " Belarus " },
FRA: {fillKey: 'FRA', visitors: 1000, country: " France " },
LVA: {fillKey: 'LVA', visitors: 22, country: " Latvia " },
HKG: {fillKey: 'HKG', visitors: 101, country: " Hong Kong " },
HND: {fillKey: 'HND', visitors: 6, country: " Honduras " },
ZMB: {fillKey: 'ZMB', visitors: 3, country: " Zambia " },
VNM: {fillKey: 'VNM', visitors: 33, country: " Viet Nam " },
CYP: {fillKey: 'CYP', visitors: 13, country: " Cyprus " },
KWT: {fillKey: 'KWT', visitors: 4, country: " Kuwait " },
SRB: {fillKey: 'SRB', visitors: 1, country: " Serbia " },
MTQ: {fillKey: 'MTQ', visitors: 1, country: " Martinique " },
CZE: {fillKey: 'CZE', visitors: 64, country: " Czech Republic " },
CUW: {fillKey: 'CUW', visitors: 1, country: " Curaçao " },
BFA: {fillKey: 'BFA', visitors: 1, country: " Burkina Faso " },
DMA: {fillKey: 'DMA', visitors: 1, country: " Dominica " },
AUS: {fillKey: 'AUS', visitors: 602, country: " Australia " },
SWZ: {fillKey: 'SWZ', visitors: 1, country: " Swaziland " },
LTU: {fillKey: 'LTU', visitors: 16, country: " Lithuania " },
MKD: {fillKey: 'MKD', visitors: 2, country: " Macedonia, Republic of " },
BHS: {fillKey: 'BHS', visitors: 2, country: " Bahamas " },
TTO: {fillKey: 'TTO', visitors: 3, country: " Trinidad and Tobago " },
MNG: {fillKey: 'MNG', visitors: 4, country: " Mongolia " },
BGD: {fillKey: 'BGD', visitors: 19, country: " Bangladesh " },
BEL: {fillKey: 'BEL', visitors: 144, country: " Belgium " },
ZAF: {fillKey: 'ZAF', visitors: 83, country: " South Africa " },
GHA: {fillKey: 'GHA', visitors: 9, country: " Ghana " },
FRO: {fillKey: 'FRO', visitors: 1, country: " Faroe Islands " },
ECU: {fillKey: 'ECU', visitors: 5, country: " Ecuador " },
LIE: {fillKey: 'LIE', visitors: 1, country: " Liechtenstein " },
NGA: {fillKey: 'NGA', visitors: 9, country: " Nigeria " },
MAR: {fillKey: 'MAR', visitors: 39, country: " Morocco " },
PRI: {fillKey: 'PRI', visitors: 13, country: " Puerto Rico " },
PAN: {fillKey: 'PAN', visitors: 3, country: " Panama " },
TUR: {fillKey: 'TUR', visitors: 334, country: " Turkey " },
MYS: {fillKey: 'MYS', visitors: 72, country: " Malaysia " },
NPL: {fillKey: 'NPL', visitors: 2, country: " Nepal " },
KOR: {fillKey: 'KOR', visitors: 359, country: " Korea, Republic of " },
BRA: {fillKey: 'BRA', visitors: 983, country: " Brazil " },
NOR: {fillKey: 'NOR', visitors: 64, country: " Norway " },
BGR: {fillKey: 'BGR', visitors: 28, country: " Bulgaria " },
GEO: {fillKey: 'GEO', visitors: 7, country: " Georgia " },
SYR: {fillKey: 'SYR', visitors: 2, country: " Syrian Arab Republic " },
JPN: {fillKey: 'JPN', visitors: 1036, country: " Japan " },
TJK: {fillKey: 'TJK', visitors: 5, country: " Tajikistan " },
TWN: {fillKey: 'TWN', visitors: 223, country: " Taiwan, Province of China " },
NLD: {fillKey: 'NLD', visitors: 476, country: " Netherlands " },
TUN: {fillKey: 'TUN', visitors: 15, country: " Tunisia " },
ARG: {fillKey: 'ARG', visitors: 92, country: " Argentina " },
OMN: {fillKey: 'OMN', visitors: 2, country: " Oman " },
LKA: {fillKey: 'LKA', visitors: 14, country: " Sri Lanka " },
DOM: {fillKey: 'DOM', visitors: 4, country: " Dominican Republic " },
EST: {fillKey: 'EST', visitors: 14, country: " Estonia " },
NIC: {fillKey: 'NIC', visitors: 1, country: " Nicaragua " },
CMR: {fillKey: 'CMR', visitors: 42, country: " Cameroon " },
DNK: {fillKey: 'DNK', visitors: 234, country: " Denmark " },
ITA: {fillKey: 'ITA', visitors: 516, country: " Italy " },
BHR: {fillKey: 'BHR', visitors: 2, country: " Bahrain " },
GRD: {fillKey: 'GRD', visitors: 1, country: " Grenada " },
BEN: {fillKey: 'BEN', visitors: 2, country: " Benin " },
ETH: {fillKey: 'ETH', visitors: 13, country: " Ethiopia " },
SDN: {fillKey: 'SDN', visitors: 1, country: " Sudan " },
KAZ: {fillKey: 'KAZ', visitors: 5, country: " Kazakhstan " },
GRL: {fillKey: 'GRL', visitors: 1, country: " Greenland " },
LSO: {fillKey: 'LSO', visitors: 2, country: " Lesotho " },
SEN: {fillKey: 'SEN', visitors: 2, country: " Senegal " },
LBY: {fillKey: 'LBY', visitors: 2, country: " Libya " },
CRI: {fillKey: 'CRI', visitors: 10, country: " Costa Rica " },
BLZ: {fillKey: 'BLZ', visitors: 1, country: " Belize " },
MUS: {fillKey: 'MUS', visitors: 4, country: " Mauritius " },
BIH: {fillKey: 'BIH', visitors: 5, country: " Bosnia and Herzegovina " },
MDG: {fillKey: 'MDG', visitors: 1, country: " Madagascar " },
LBR: {fillKey: 'LBR', visitors: 1, country: " Liberia " },
DZA: {fillKey: 'DZA', visitors: 30, country: " Algeria " },
PAK: {fillKey: 'PAK', visitors: 85, country: " Pakistan " },
LBN: {fillKey: 'LBN', visitors: 2, country: " Lebanon " },
USA: {fillKey: 'USA', visitors: 6732, country: " United States " },
BMU: {fillKey: 'BMU', visitors: 1, country: " Bermuda " },
GUM: {fillKey: 'GUM', visitors: 1, country: " Guam " },
VEN: {fillKey: 'VEN', visitors: 24, country: " Venezuela, Bolivarian Republic of " },
EGY: {fillKey: 'EGY', visitors: 70, country: " Egypt " },
AUT: {fillKey: 'AUT', visitors: 408, country: " Austria " },
QAT: {fillKey: 'QAT', visitors: 5, country: " Qatar " },
GTM: {fillKey: 'GTM', visitors: 5, country: " Guatemala " },
ESP: {fillKey: 'ESP', visitors: 489, country: " Spain " },
HUN: {fillKey: 'HUN', visitors: 84, country: " Hungary " },
AZE: {fillKey: 'AZE', visitors: 3, country: " Azerbaijan " },
BOL: {fillKey: 'BOL', visitors: 21, country: " Bolivia, Plurinational State of " },
HRV: {fillKey: 'HRV', visitors: 38, country: " Croatia " },
ALB: {fillKey: 'ALB', visitors: 1, country: " Albania " },
GBR: {fillKey: 'GBR', visitors: 2143, country: " United Kingdom " },
SLV: {fillKey: 'SLV', visitors: 1, country: " El Salvador " },
THA: {fillKey: 'THA', visitors: 46, country: " Thailand " },
GUY: {fillKey: 'GUY', visitors: 1, country: " Guyana " },
COL: {fillKey: 'COL', visitors: 344, country: " Colombia " },
MAC: {fillKey: 'MAC', visitors: 4, country: " Macao " },
ISR: {fillKey: 'ISR', visitors: 270, country: " Israel " },
MLT: {fillKey: 'MLT', visitors: 18, country: " Malta " },
RUS: {fillKey: 'RUS', visitors: 344, country: " Russian Federation " },
GRC: {fillKey: 'GRC', visitors: 74, country: " Greece " },
PRT: {fillKey: 'PRT', visitors: 67, country: " Portugal " },
MLI: {fillKey: 'MLI', visitors: 2, country: " Mali " },
SGP: {fillKey: 'SGP', visitors: 279, country: " Singapore " },
DEU: {fillKey: 'DEU', visitors: 2732, country: " Germany " },
IRL: {fillKey: 'IRL', visitors: 68, country: " Ireland " },
TKM: {fillKey: 'TKM', visitors: 1, country: " Turkmenistan " },
IDN: {fillKey: 'IDN', visitors: 51, country: " Indonesia " },
REU: {fillKey: 'REU', visitors: 1, country: " Réunion " },
CIV: {fillKey: 'CIV', visitors: 6, country: " Côte d'Ivoire " },
IRN: {fillKey: 'IRN', visitors: 206, country: " Iran, Islamic Republic of " },
SVK: {fillKey: 'SVK', visitors: 38, country: " Slovakia " },
MDA: {fillKey: 'MDA', visitors: 4, country: " Moldova, Republic of " },
IND: {fillKey: 'IND', visitors: 1044, country: " India " },
PHL: {fillKey: 'PHL', visitors: 67, country: " Philippines " },
ROU: {fillKey: 'ROU', visitors: 33, country: " Romania " },
FIN: {fillKey: 'FIN', visitors: 105, country: " Finland " },
UZB: {fillKey: 'UZB', visitors: 1, country: " Uzbekistan " },
CHL: {fillKey: 'CHL', visitors: 104, country: " Chile " },
POL: {fillKey: 'POL', visitors: 301, country: " Poland " },
UKR: {fillKey: 'UKR', visitors: 92, country: " Ukraine " },
LUX: {fillKey: 'LUX', visitors: 26, country: " Luxembourg " },
URY: {fillKey: 'URY', visitors: 8, country: " Uruguay " },
ARM: {fillKey: 'ARM', visitors: 6, country: " Armenia " },
TZA: {fillKey: 'TZA', visitors: 3, country: " Tanzania, United Republic of " },
KEN: {fillKey: 'KEN', visitors: 25, country: " Kenya " },
CUB: {fillKey: 'CUB', visitors: 2, country: " Cuba " },
SAU: {fillKey: 'SAU', visitors: 66, country: " Saudi Arabia " },
ARE: {fillKey: 'ARE', visitors: 37, country: " United Arab Emirates " },
IRQ: {fillKey: 'IRQ', visitors: 10, country: " Iraq " },
MMR: {fillKey: 'MMR', visitors: 3, country: " Myanmar " },
MEX: {fillKey: 'MEX', visitors: 360, country: " Mexico " },
UGA: {fillKey: 'UGA', visitors: 2, country: " Uganda " },
JOR: {fillKey: 'JOR', visitors: 4, country: " Jordan " },
}
})
