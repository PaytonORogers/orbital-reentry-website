const process
// import { getVisibleSatellites } from "./node_modules/tle.js";

const myUsername = process.env.SPACETRACK_USERNAME;
const myPassword = process.env.SPACETRACK_PASSWORD;

console.log('running')
var testData = [
    {
        CCSDS_OMM_VERS: '3.0',
        COMMENT: 'GENERATED VIA SPACE-TRACK.ORG API',
        CREATION_DATE: '2025-07-21T01:46:27',
        ORIGINATOR: '18 SPCS',
        OBJECT_NAME: 'CZ-2C R/B',
        OBJECT_ID: '2019-045D',
        CENTER_NAME: 'EARTH',
        REF_FRAME: 'TEME',
        TIME_SYSTEM: 'UTC',
        MEAN_ELEMENT_THEORY: 'SGP4',
        EPOCH: '2025-07-21T00:31:20.590176',
        MEAN_MOTION: '16.20776564',
        ECCENTRICITY: '0.00064250',
        INCLINATION: '34.9457',
        RA_OF_ASC_NODE: '192.9911',
        ARG_OF_PERICENTER: '146.2923',
        MEAN_ANOMALY: '255.2443',
        EPHEMERIS_TYPE: '0',
        CLASSIFICATION_TYPE: 'U',
        NORAD_CAT_ID: '44452',
        ELEMENT_SET_NO: '999',
        REV_AT_EPOCH: '33404',
        BSTAR: '0.00058489000000',
        MEAN_MOTION_DOT: '0.01279273',
        MEAN_MOTION_DDOT: '0.0000012575000',
        SEMIMAJOR_AXIS: '6595.581',
        PERIOD: '88.846',
        APOAPSIS: '221.684',
        PERIAPSIS: '213.209',
        OBJECT_TYPE: 'ROCKET BODY',
        RCS_SIZE: 'LARGE',
        COUNTRY_CODE: 'PRC',
        LAUNCH_DATE: '2019-07-26',
        SITE: 'XSC',
        DECAY_DATE: null,
        FILE: '4791116',
        GP_ID: '293088145',
        TLE_LINE0: '0 CZ-2C R/B',
        TLE_LINE1: '1 44452U 19045D   25202.02176609  .01279273  12575-5  58489-3 0  9993',
        TLE_LINE2: '2 44452  34.9457 192.9911 0006425 146.2923 255.2443 16.20776564334042'
    },
    {
        CCSDS_OMM_VERS: '3.0',
        COMMENT: 'GENERATED VIA SPACE-TRACK.ORG API',
        CREATION_DATE: '2025-07-21T03:26:15',
        ORIGINATOR: '18 SPCS',
        OBJECT_NAME: 'STARLINK-1861',
        OBJECT_ID: '2020-088AC',
        CENTER_NAME: 'EARTH',
        REF_FRAME: 'TEME',
        TIME_SYSTEM: 'UTC',
        MEAN_ELEMENT_THEORY: 'SGP4',
        EPOCH: '2025-07-21T01:41:08.954592',
        MEAN_MOTION: '16.15106266',
        ECCENTRICITY: '0.00087420',
        INCLINATION: '53.0329',
        RA_OF_ASC_NODE: '202.6522',
        ARG_OF_PERICENTER: '347.4273',
        MEAN_ANOMALY: '131.2559',
        EPHEMERIS_TYPE: '0',
        CLASSIFICATION_TYPE: 'U',
        NORAD_CAT_ID: '47148',
        ELEMENT_SET_NO: '999',
        REV_AT_EPOCH: '25799',
        BSTAR: '0.00095827000000',
        MEAN_MOTION_DOT: '0.01297527',
        MEAN_MOTION_DDOT: '0.0012355000000',
        SEMIMAJOR_AXIS: '6611.009',
        PERIOD: '89.158',
        APOAPSIS: '238.654',
        PERIAPSIS: '227.095',
        OBJECT_TYPE: 'PAYLOAD',
        RCS_SIZE: 'LARGE',
        COUNTRY_CODE: 'US',
        LAUNCH_DATE: '2020-11-25',
        SITE: 'AFETR',
        DECAY_DATE: null,
        FILE: '4791122',
        GP_ID: '293088148',
        TLE_LINE0: '0 STARLINK-1861',
        TLE_LINE1: '1 47148U 20088AC  25202.07024253  .01297527  12355-2  95827-3 0  9991',
        TLE_LINE2: '2 47148  53.0329 202.6522 0008742 347.4273 131.2559 16.15106266257990'
    },
    {
        CCSDS_OMM_VERS: '3.0',
        COMMENT: 'GENERATED VIA SPACE-TRACK.ORG API',
        CREATION_DATE: '2025-07-21T13:46:20',
        ORIGINATOR: '18 SPCS',
        OBJECT_NAME: 'STARLINK-2184',
        OBJECT_ID: '2021-017AW',
        CENTER_NAME: 'EARTH',
        REF_FRAME: 'TEME',
        TIME_SYSTEM: 'UTC',
        MEAN_ELEMENT_THEORY: 'SGP4',
        EPOCH: '2025-07-21T09:06:42.325920',
        MEAN_MOTION: '16.21718010',
        ECCENTRICITY: '0.00053780',
        INCLINATION: '53.0341',
        RA_OF_ASC_NODE: '145.9482',
        ARG_OF_PERICENTER: '228.3869',
        MEAN_ANOMALY: '228.4190',
        EPHEMERIS_TYPE: '0',
        CLASSIFICATION_TYPE: 'U',
        NORAD_CAT_ID: '47766',
        ELEMENT_SET_NO: '999',
        REV_AT_EPOCH: '24256',
        BSTAR: '0.00102880000000',
        MEAN_MOTION_DOT: '0.02344154',
        MEAN_MOTION_DDOT: '0.0000118520000',
        SEMIMAJOR_AXIS: '6593.028',
        PERIOD: '88.795',
        APOAPSIS: '218.439',
        PERIAPSIS: '211.348',
        OBJECT_TYPE: 'PAYLOAD',
        RCS_SIZE: 'LARGE',
        COUNTRY_CODE: 'US',
        LAUNCH_DATE: '2021-03-04',
        SITE: 'AFETR',
        DECAY_DATE: null,
        FILE: '4791451',
        GP_ID: '293126581',
        TLE_LINE0: '0 STARLINK-2184',
        TLE_LINE1: '1 47766U 21017AW  25202.37965655  .02344154  11852-4  10288-2 0  9993',
        TLE_LINE2: '2 47766  53.0341 145.9482 0005378 228.3869 228.4190 16.21718010242564'
    },
    {
        CCSDS_OMM_VERS: '3.0',
        COMMENT: 'GENERATED VIA SPACE-TRACK.ORG API',
        CREATION_DATE: '2025-07-21T13:36:30',
        ORIGINATOR: '18 SPCS',
        OBJECT_NAME: 'STARLINK-3537',
        OBJECT_ID: '2022-029A',
        CENTER_NAME: 'EARTH',
        REF_FRAME: 'TEME',
        TIME_SYSTEM: 'UTC',
        MEAN_ELEMENT_THEORY: 'SGP4',
        EPOCH: '2025-07-21T12:09:05.209056',
        MEAN_MOTION: '15.95166839',
        ECCENTRICITY: '0.00015570',
        INCLINATION: '53.2033',
        RA_OF_ASC_NODE: '250.4986',
        ARG_OF_PERICENTER: '65.6642',
        MEAN_ANOMALY: '78.9997',
        EPHEMERIS_TYPE: '0',
        CLASSIFICATION_TYPE: 'U',
        NORAD_CAT_ID: '52088',
        ELEMENT_SET_NO: '999',
        REV_AT_EPOCH: '18794',
        BSTAR: '0.00374180000000',
        MEAN_MOTION_DOT: '0.01477586',
        MEAN_MOTION_DDOT: '0.0011291000000',
        SEMIMAJOR_AXIS: '6665.987',
        PERIOD: '90.273',
        APOAPSIS: '288.889',
        PERIAPSIS: '286.814',
        OBJECT_TYPE: 'PAYLOAD',
        RCS_SIZE: 'LARGE',
        COUNTRY_CODE: 'US',
        LAUNCH_DATE: '2022-03-19',
        SITE: 'AFETR',
        DECAY_DATE: null,
        FILE: '4791449',
        GP_ID: '293126579',
        TLE_LINE0: '0 STARLINK-3537',
        TLE_LINE1: '1 52088U 22029A   25202.50631029  .01477586  11291-2  37418-2 0  9994',
        TLE_LINE2: '2 52088  53.2033 250.4986 0001557  65.6642  78.9997 15.95166839187943'
    },
    {
        CCSDS_OMM_VERS: '3.0',
        COMMENT: 'GENERATED VIA SPACE-TRACK.ORG API',
        CREATION_DATE: '2025-07-21T03:26:15',
        ORIGINATOR: '18 SPCS',
        OBJECT_NAME: 'STARLINK-30262',
        OBJECT_ID: '2023-115Q',
        CENTER_NAME: 'EARTH',
        REF_FRAME: 'TEME',
        TIME_SYSTEM: 'UTC',
        MEAN_ELEMENT_THEORY: 'SGP4',
        EPOCH: '2025-07-20T22:21:13.831776',
        MEAN_MOTION: '16.06448358',
        ECCENTRICITY: '0.00030670',
        INCLINATION: '43.0003',
        RA_OF_ASC_NODE: '359.6873',
        ARG_OF_PERICENTER: '269.0596',
        MEAN_ANOMALY: '229.7673',
        EPHEMERIS_TYPE: '0',
        CLASSIFICATION_TYPE: 'U',
        NORAD_CAT_ID: '57535',
        ELEMENT_SET_NO: '999',
        REV_AT_EPOCH: '11062',
        BSTAR: '0.00124330000000',
        MEAN_MOTION_DOT: '0.00967717',
        MEAN_MOTION_DDOT: '0.0005088200000',
        SEMIMAJOR_AXIS: '6634.741',
        PERIOD: '89.639',
        APOAPSIS: '258.641',
        PERIAPSIS: '254.571',
        OBJECT_TYPE: 'PAYLOAD',
        RCS_SIZE: 'LARGE',
        COUNTRY_CODE: 'US',
        LAUNCH_DATE: '2023-08-08',
        SITE: 'AFWTR',
        DECAY_DATE: null,
        FILE: '4791123',
        GP_ID: '293088147',
        TLE_LINE0: '0 STARLINK-30262',
        TLE_LINE1: '1 57535U 23115Q   25201.93141009  .00967717  50882-3  12433-2 0  9992',
        TLE_LINE2: '2 57535  43.0003 359.6873 0003067 269.0596 229.7673 16.06448358110622'
    },
    {
        CCSDS_OMM_VERS: '3.0',
        COMMENT: 'GENERATED VIA SPACE-TRACK.ORG API',
        CREATION_DATE: '2025-07-21T06:36:17',
        ORIGINATOR: '18 SPCS',
        OBJECT_NAME: 'ELECTRON R/B',
        OBJECT_ID: '2025-125C',
        CENTER_NAME: 'EARTH',
        REF_FRAME: 'TEME',
        TIME_SYSTEM: 'UTC',
        MEAN_ELEMENT_THEORY: 'SGP4',
        EPOCH: '2025-07-21T05:28:42.544416',
        MEAN_MOTION: '16.09070218',
        ECCENTRICITY: '0.00865800',
        INCLINATION: '42.0111',
        RA_OF_ASC_NODE: '183.8939',
        ARG_OF_PERICENTER: '160.6301',
        MEAN_ANOMALY: '325.3458',
        EPHEMERIS_TYPE: '0',
        CLASSIFICATION_TYPE: 'U',
        NORAD_CAT_ID: '64342',
        ELEMENT_SET_NO: '999',
        REV_AT_EPOCH: '622',
        BSTAR: '0.00140390000000',
        MEAN_MOTION_DOT: '0.02347659',
        MEAN_MOTION_DDOT: '0.0000079387000',
        SEMIMAJOR_AXIS: '6627.532',
        PERIOD: '89.493',
        APOAPSIS: '306.778',
        PERIAPSIS: '192.016',
        OBJECT_TYPE: 'ROCKET BODY',
        RCS_SIZE: 'LARGE',
        COUNTRY_CODE: 'US',
        LAUNCH_DATE: '2025-06-11',
        SITE: 'RLLC',
        DECAY_DATE: null,
        FILE: '4791223',
        GP_ID: '293120786',
        TLE_LINE0: '0 ELECTRON R/B',
        TLE_LINE1: '1 64342U 25125C   25202.22827019  .02347659  79387-5  14039-2 0  9990',
        TLE_LINE2: '2 64342  42.0111 183.8939 0086580 160.6301 325.3458 16.09070218  6229'
    }
]

var uniqTLES = []
for (let tle in testData) {
    var uniqTLE = []
    uniqTLE.push(testData[tle]['TLE_LINE0']);
    uniqTLE.push(testData[tle]['TLE_LINE1']);
    uniqTLE.push(testData[tle]['TLE_LINE2']);
    uniqTLES.push(uniqTLE);
}

// var lat  = '34.654735'
// var long = '-120.483930'
var button = document.getElementById("enter")
button.addEventListener("click", () => console.log("victory!"))

var refreshButton = document.getElementById("refresh")
refreshButton.addEventListener("click", () => getSATNOs())

// function SLA() {}
// var lat = document.getElementById("lat").innerHTML;
// var time = Date.now();
// var minute = 60000
// var visibleSats = [];
// var i = 0;
// while (i < 1440) {
//     var allVisible = getVisibleSatellites({
//         observerLat: lat,
//         observerLng: long,
//         observerHeight: 0,

//         // Array of 3-line TLE arrays.
//         tles: uniqTLES,

//         // Filters satellites above a certain elevation (0 is horizon, 90 is directly overhead).
//         // E.g. 75 will only return satellites 75 degrees or greater above the horizon.
//         // Defaults to 0.
//         elevationThreshold: 5,

//         // Defaults to current time.
//         timestampMS: time + (minute * i)
//     });
//     visibleSats.push([allVisible, time + (minute * i)]);
//     i++;
// }

// for (var item in visibleSats) {
//     if (visibleSats[item][0][0] != null) {
//         console.log(visibleSats[item]);
//     }
// }

function getSATNOs() {
    fetch('https://www.space-track.org/ajaxauth/login', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },

        body: JSON.stringify({
            identity: myUsername,
            password: myPassword
        })
    })
        .then((response) => {
            return response.headers.getSetCookie()
        })
        .then((cookies) => {
            fetch(`https://www.space-track.org/basicspacedata/query/class/tip/DECAY_EPOCH/%3Enow+1/format/json`, {
                credentials: "same-origin",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    'Cookie': cookies
                },
            })
                .then((response2) => {
                    var targetSats = [];
                    toJSON(response2.body)
                        .then(output => {
                            let table = document.getElementById("reentry objects")
                            for (message in output) {
                                targetSats.push(output[message]['NORAD_CAT_ID']);
                                console.log(output[message]['NORAD_CAT_ID']);
                                let newRowItem = document.createElement("tr");
                                let newSATNO = document.createElement('td');
                                let newReentryTime = document.createElement('td');
                                newSATNO.innerText = output[message]['NORAD_CAT_ID'];
                                newReentryTime.innerText = output[message]['DECAY_EPOCH'];
                                newRowItem.appendChild(newSATNO);
                                newRowItem.appendChild(newRentryTime);
                                table.appendChild(newRowItem);
                            }
                            console.log(targetSats);
                            targetString = (targetSats).join(',');
                            console.log(targetString);
                            fetch(`https://www.space-track.org/basicspacedata/query/class/gp/NORAD_CAT_ID/${targetString}/format/json`, {
                                credentials: "same-origin",
                                headers: {
                                    "Accept": 'application/json',
                                    "Content-Type": 'application/json',
                                    'Cookie': cookies
                                },
                            })
                                .then((response) => {
                                    toJSON(response.body)
                                        .then(output => {
                                            console.log(output)
                                        })
                                })
                        })
                })
        })
}

async function toJSON(body) {
    const reader = body.getReader(); // `ReadableStreamDefaultReader`
    const decoder = new TextDecoder();
    const chunks = [];
    async function read() {
        const { done, value } = await reader.read();
        // all chunks have been read?
        if (done) {
            return JSON.parse(chunks.join(''));
        }
        const chunk = decoder.decode(value, { stream: true });
        chunks.push(chunk);
        return read(); // read the next chunk
    }
    return read();
}

// function transform(str) {
//     let data = str.split('\n').map(i => i.split(','));
//     let headers = data.shift();
//     let output = data.map(d => { obj = {}; headers.map((h, i) => obj[headers[i]] = d[i]); return obj; });
//     console.log(output);
// }