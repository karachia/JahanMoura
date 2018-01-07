//Navigation bar
var navServices_en = 'Services';
var navPortfolio_en = 'Portfolio';
var navAbout_en = 'About';
var navTeam_en = 'Team';
var navOffices_en = 'Offices';
var navContact_en = 'Contact';


//Services
var servicesHeader_en = 'Services';
var oceanHeader_en = 'Ocean Freight';
var airHeader_en = 'Air Freight';
var railHeader_en = 'Rail Freight';
var roadHeader_en = 'Road Freight';
var multiHeader_en = 'Multi Modal';
var jitHeader_en = 'Just in Time (J.I.T)';

//content of services
var ocean_en = '<p class="text-muted description EN-text" >Maritime transportation is the most important means of transporting goods in our time. Today, around 90 percent of world trade is carried by the international shipping industry. Without shipping, the import and export of goods on the scale necessary to sustain the modern world would not be possible. Jahan Moura provides the following services for customers:</p><ul style="list-style-type:disc;" class="text-muted EN-text description"><li>Transportation of containerized, general, bulk, and LCL cargo by reliable international shipping lines via the ports of southern Iran to and from ports world-wide. </li> <li>Issuance of FIATA, TBL and HBL</li> <li>Providing Switch Bill of Lading</li> <li>Issuance of transportation documents</li> <li>Insurance services </li> <li>Providing cargo inspection, certificate of origin, and phytosanitary services. </li> <li>Container handling </li> <li>Loading, unloading, and warehousing</li></ul>';
var air_en = '<p class="text-muted description EN-text" >Although air transportation constitutes a low percentage of world-wide cargo transport, it is often used for light and valuable cargo or perishable and expensive goods. Jahan Moura provides the following services for customers:</p><ul style="list-style-type:disc;" class="text-muted EN-text description"><li>Cargo transport from all international airports to Iran and vice versa</li> <li>Providing cargo inspection, certificate of origin, and phytosanitary services. </li> <li>Issuance of air waybill</li> <li>Issuance of transportation documents</li> <li>Insurance services </li></ul>';
var road_en = '<p class="text-muted description EN-text" >For countries with no direct access to sea, ocean or water ways, road transportation comes as the most popular means transporting cargo. With expansion of road ways, hence increase cargo road transportation is regarded as the one of most important economic development factors among the countries. Road transportation is carried under CMR, TIR, FIATA, TBL conventions. Jahan Moura provides the following services for customers:</p><ul style="list-style-type:disc;" class="text-muted EN-text description"><li>Fast and secure road transport by various types of trucks from Iran to Turkey and European countries and vice versa.</li> <li>Providing transit services from all Iranian ports and customs to countries such as CIS countries, Afghanistan, Iraq and vice versa.</li> <li>Project cargo and Expositions cargo</li> <li>Issuance of FIATA bill of lading, Carne TIR, and CMR </li> <li>Issuance of transportation documents</li> <li>Insurance services</li> <li>Providing cargo inspection, certificate of origin, and phytosanitary services. </li></ul>';
var rail_en = '<p class="text-muted description EN-text" >Rail transportation can be used in ports of entry accessible to railroads. In this form of transportation, after customs formalities of the destination countries, transport is done under internal tariffs and regulations of the destination and crossing countries. Jahan Moura provides the following services for customers:</p><ul style="list-style-type:disc;" class="text-muted EN-text description"><li>Secure internal and international cargo transit from/ to CIS countries via Iran and providing export services to both domestic and international destinations. </li> <li>Export, import, transit of containerized, general and bulk cargo by rail </li> <li>Issuance of SMGS and rail waybill</li> <li>Issuance of FBL and TBL</li> <li>Issuance of transportation documents</li> <li>Insurance services </li> <li>Providing cargo inspection, certificate of origin, and phytosanitary services. </li></ul>';
var multi_en = '';
var jit_en = '';

//About us
var aboutHeader_en = 'About Us';
var aboutDesc_en = '<span class="text-left">Jahan Moura, an Iran-based international freight forwarding company and a member of FIATA & IATA, has provided unparalleled service for over two decades, namely since 1995.<br>Being an independent privately-owned company, we pride ourselves on being able to provide you with the best solution necessary for any kind of shipment. Over the years, we have established strong relationships in the industry, thus are able to offer you with the most efficient and secure way to get your goods to their final destination. Through the knowledge of our dedicated staff of professionals, we are also able to consult you on streamlining your current freight operations.<br> We are committed to giving each and every one of our clients the individual attention that they require and deserve. Jahan Moura is constantly examining and implementing developments from within the industry to modernize and advance our procedures and transport solutions.<br> We are committed to being your one-stop-shop for all your transportation and logistics requirements, be it around the corner or around the world.</span>';

//Offices
var officesHeader_en = 'Offices';
var qeshm_en = 'Qeshm - Headquarter';
var esfahan_en = 'Isfahan - Marketing';
var tehran_en = 'Tehran - Administration';
var bandar_en = 'Bandar Abbas - Operations';
var qeshmInfo_en = 'Telephone: +98 (076) 352-44970-2<br>Fax: +98 (076) 352-44973';
var esfahanInfo_en = 'Telephone: +98 (031) 333-85140-2<br>Fax: +98 (031) 333-79344';
var tehranInfo_en = 'Telephone: +98 (021) 885-30671-2<br>Fax: +98 (021) 887-53869';
var bandarInfo_en = 'Telephone: +98 (076) 336-64581<br>Fax: Extension: 115';



function loadEnglish() {
//navigation bar
    document.getElementById("navServices").innerHTML = navServices_en;
    // document.getElementById("navPortfolio").innerHTML = navPortfolio;
    // document.getElementById("navTeam").innerHTML = navTeam;
    document.getElementById("navAbout").innerHTML = navAbout_en;
    document.getElementById("navOffices").innerHTML = navOffices_en;
    document.getElementById("navContact").innerHTML = navContact_en;

    document.getElementById("servicesHeader").innerHTML = servicesHeader_en;
//Services
    //services headers
    document.getElementById("oceanHeader").innerHTML = oceanHeader_en;
    document.getElementById("airHeader").innerHTML = airHeader_en;
    document.getElementById("roadHeader").innerHTML = roadHeader_en;
    document.getElementById("railHeader").innerHTML = railHeader_en;
    document.getElementById("multiHeader").innerHTML = multiHeader_en;
    document.getElementById("jitHeader").innerHTML = jitHeader_en;
    //services content
    document.getElementById("oceanContent").innerHTML = ocean_en;
    document.getElementById("airContent").innerHTML = air_en;
    document.getElementById("roadContent").innerHTML = road_en;
    document.getElementById("railContent").innerHTML = rail_en;
    document.getElementById("modalContent").innerHTML = multi_en;
    document.getElementById("litContent").innerHTML = jit_en;
    //modals
    document.getElementById("oceanFreight").innerHTML = oceanHeader_en;
    document.getElementById("airFreight").innerHTML = airHeader_en;
    document.getElementById("roadFreight").innerHTML = roadHeader_en;
    document.getElementById("railFreight").innerHTML = railHeader_en;
    document.getElementById("multiFreight").innerHTML = multiHeader_en;


//About us
    document.getElementById("aboutHeader").innerHTML = aboutHeader_en;
    document.getElementById("aboutDesc").innerHTML = aboutDesc_en;

//Offices
    document.getElementById("officesHeader").innerHTML = officesHeader_en;
    //headers
    document.getElementById("qeshmOfficeH").innerHTML = qeshm_en;
    document.getElementById("isfahanOfficeH").innerHTML = esfahan_en;
    document.getElementById("tehranOfficeH").innerHTML = tehran_en;
    document.getElementById("bandarOfficeH").innerHTML = bandar_en;
    //info
    document.getElementById("qeshmInfo").innerHTML = qeshmInfo_en;
    document.getElementById("isfahanInfo").innerHTML = esfahanInfo_en;
    document.getElementById("tehranInfo").innerHTML = tehranInfo_en;
    document.getElementById("bandarInfo").innerHTML = bandarInfo_en;
}