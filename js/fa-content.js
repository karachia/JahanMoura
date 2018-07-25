//navigation bar
var navServices = 'خدمات';
var navPortfolio = 'نمونه کار';
var navAbout = 'در باره‌ی ما';
var navTeam = 'تیم';
var navOffices ='شعب';
var navContact = 'تماس';

//services
var servicesHeader = 'خدمات';
var oceanHeader = 'حمل و نقل دریایی';
var airHeader = 'حمل و نقل هوایی';
var railHeader = 'حمل و نقل ریلی';
var roadHeader = 'حمل و نقل جاده‌ای';
var multiHeader = 'حمل و نقل ترکیبی';
var jitHeader = 'Just in Time (J.I.T)';

//content of services
var ocean = '<p class="text-muted description FA-text" dir="rtl">حمل دریایی به عنوان مهم ترین شکل و روش مبادلات بین المللی کالا، اساس حمل و نقل جهان را تشکیل می دهد. تجارت از طریق دریا به لحاظ حجم بسیار بالای جابجایی کالا و همچنین به دلیل صرفه اقتصادی از دیرباز به عنوان موثرترین عامل حمل کالا مورد توجه بازرگانان و دولتها بوده است. شرکت جهان مورا در زمینه حمل دریایی، در راستای خدمت رسانی به مشتریان محترم، خدمات زیر را ارائه می دهد:</p><ul style="list-style-type:disc;" class="text-muted description FA-text" dir="rtl"><li>حمل کالا های کانتینری ، کالاهای عمومی و بارهای فله و گروپاژ توسط خطوط معتبر کشتیرانی از طریق بنادر جنوبی ایران به کلیه بنادر فعال و برعکس</li><li>انجام کلیه امور گمرکی صادرات، واردات و ترانزیت کالا</li><li>صدور بارنامه فیاتا ،سراسریو فورواردری</li><li>سوئیچ بارنامه</li><li>صدور اسناد حمل</li><li>خدمات بیمه ای</li><li>خدمات بازرسی کالا، گواهی مبداء و بهداشت</li><li>ریافت کانتینر از کشتیرانی، پلمپ و انجام امور پاساوان گمرکی</li><li>تخلیه و بارگیری و انبارداری در محوطه اختصاصی کالا </li></ul>';
var air = '<p class="text-muted description FA-text" dir="rtl">حمل کالا با هواپیما، درصد پائینی از حمل و نقل را تشکیل می دهد می دهد و معمولاً بارهای سبک و با قیمت بالا یا بارهای فاسد شدنی با ارزش، به وسیله هواپیما حمل می گردد. شرکت جهان مورا در راستای خدمت رسانی به مشتریان محترم خدمات زیر را جهت حمل هوایی ارائه می دهد: </p> <ul style="list-style-type:disc;" class="text-muted description FA-text" dir="rtl"> <li>حمل کالا از کلیه فرودگاههای بین المللی خارجی به ایران و برعکس</li> <li>انجام کلیه امور گمرکی صادرات ، واردات و ترانزیت کالا</li> <li>خدمات بازرسی کالا، گواهی مبداء و بهداشت</li> <li>صدور بارنامه هوایی</li> <li>صدور اسناد حمل</li> <li>خدمات بیمه ای</li> </ul>';
var road = '<p class="text-muted description FA-text" dir="rtl">برای کشورهایی که به دریا دسترسی ندارند حمل جاده ای یکی از عمده ترین شیوه های جابجایی کالا می باشد. با گسترش بزرگراهها و مسیرهای ترانزیتی و تاسیس ترمینال ها، توجه به حمل جاده ای افزایش یافته است به طوری که امروزه حمل و نقل جاده ای به عنوان یکی از مهم ترین شاخص های توسعه اقتصادی در کشورهای جهان به حساب می آید. حمل جاده ای تحت پوشش کنوانسیون های CMR, TIR, FIATA, TBL انجام می پذیرد. شرکت جهان مورا در راستای خدمات رسانی به مشتریان محترم، خدمات زیر را جهت حمل جاده ای ارائه می دهد: </p> <ul style="list-style-type:disc;" class="text-muted description FA-text" dir="rtl"> <li>سرویس های سریع و مطمئن حمل جاده ای توسط انواع کامیون از ایران به ترکیه و کشورهای اتحادیه اروپا و برعکس</li> <li>سرویس حمل کالاهای ترانزیتی از کلیه بنادر و گمرکات ایران به کشورهای آسیای میانه و افغانستان ، عراق و سایر کشورها</li> <li>سرویس حمل جاده ای محموله های پروژه ای و کالاهای نمایشگاهی</li> <li>انجام کلیه امور گمرکی ، صادرات ، واردات و ترانزیت کالا</li> <li>صدور بارنامه فیاتا ، کارنه تیر و راهنامه بین المللی </li> <li>صدور اسناد حمل</li> <li>خدمات بیمه ای</li> <li>خدمات بازرسی کالا، گواهی مبداء و بهداشت</li> </ul>';
var rail = '<p class="text-muted description FA-text" dir="rtl">حمل بار به وسیله راه آهن از مبادی ورودی/ خروجی/ داخلی کشور که دارای تجهیزات ریلی باشند ، انجام می پذیرد در این نوع حمل پس از انجام تشریفات گمرکی یا پاساوانی به مقاصد داخلی / خارجی یا گمرکات ثانوی ، با امکانات راه آهن کشور و شرایط و مقررات تعرفه داخلی و مقررات تعرفه کشورهایی که تا مقصد طی می شود صورت می گیرد . شرکت جهان مورا در راستای خدمات رسانی به مشتریان محترم ، خدمات زیر را جهت حمل ریلی ارائه می دهد: </p> <ul style="list-style-type:disc;" class="text-muted description FA-text" dir="rtl"> <li>حمل مطمئن کالاهای ترانزیت داخلی و خارجی از کشورهای آسیای میانه از طریق ایران و ارائه سرویس حمل به سایر کشورها و مبادی داخلی و خارجی و برعکس</li> <li>حمل کالاهای صادراتی و وارداتی و حمل انواع کالاهای کانتینری ، عمومی و فله از طریق راه آهن </li> <li>صدور راهنامه SMGS</li> <li>صدور بارنامه FBL,TBL</li> <li>انجام کلیه امور گمرکی صادرات ، واردات و ترانزیت کالا</li> <li>صدور اسناد حمل </li> <li>خدمات بیمه ای</li> <li>خدمات بازرسی کالا، گواهی مبداء و بهداشت</li> <li>دریافت مجوز از راه آهن برای کلیه محموله های صادراتی ، وارداتی و ترانزیت </li> <li>دریافت کد از راه آهن کشورهای مسیر </li> </ul>';
var multi = '<p class="text-muted description FA-text" dir="rtl">شرکت جهان مورا تجربه ی بسیاری در ارائه ی خدمات حمل و نقل ترکیبی دارد. پس از بررسی کالا و شرایط خاصِ آن، شرکت جهان مورا بهترین، مطمئن ترین و سریع ترین روش حمل و نقل را به مشتران ارائه می دهد. جهان مورا با بهره گیری از از روش های مختلف و ترکیبی حمل و نقل، از جمله زمینی، دریایی و جاده ای، قادر به خدمات رسانی به مشتریان با هرگونه کالا و مبدأ و مقصد است.</p>';
var jit = '<p class="text-muted description FA-text" dir="rtl">شرکت جهان مورا با بهره گیری از روش Just-in-time قادر به خدمات رسانی در کوتاه ترین زمان با بهترین نرخ ها در مارکت است. </p>';

//about us
var aboutHeader = 'در باره‌ی ما';
var aboutDesc = '<p dir="rtl" class="text-right">شرکت جهان مورا به عنوان یک شرکت فورواردر بین المللی عضو FIATA و IATA  در سال ۱۳۷۵ تاسیس شد. نگرش مدیران این شرکت بر اساس مدیریت زنجیره تامین  با پشتیبانی از صادر کنندگان و وارد کنندگان در بخش لجستیک تنظیم گردیده وشرکت جهان مورا حمل محمولات از طریق هوا، دریا و زمین با بهترین سرویس و مناسب ترین هزینه  که باعث رشد تجارت خارجی و سودآوری مشتریان می گردد را در اولویت قرار داده است . یکی از خصوصیات بارز در شرکت جهان مورا ارائه بارنامه FIATA با بهترین ترین نرخ حمل ممکن و نیز صدور بارنامه های سوئیچ در کشورهای ثالث در حمل و نقل دریایی به صورت LCL/FCL ، کالاهای عمومی و فله می باشد.  شرکت جهان مورا با داشتن بیش از بیست و پنج شعبه و نمایندگی اصلی در داخل ایران و کشورهای اروپایی، آسیایی و امریکای شمالی و تمامی بنادر اصلی جهان با ارائه بهترین سرویس حمل کالاهای تجاری توانایی خود را به اثبات رسانیده و طرف قرار داد شرکتهای معتبر اروپایی و آسیایی میباشد. جهان مورا با توسعه توانایی خود دارای قابلیت حمل انواع کالاهای خطرناک در نیمکره شمالی می باشد. <br>با توجه به گستردگی و پیشرفتهای روز افزون صنعت لجستیک، مدیریت و پرسنل این شرکت با به روزرسانی دانش خود شرکت را مجهز به سیستم منحصر به فردی نموده که موجب رضایت تمام صادر کنندگان و وارد کنندگان بوده و خواهد بود.</p>';

//Offices
var officesHeader = 'شعبه ها';
var qeshmOffice = 'قشم - دفتر مرکزی';
var esfahanOffice = 'اصفهان - دفتر بازرگانی';
var tehranOffice = 'تهران - دفتر اداری';
var bandarOffice = 'بندر عباس - دفتر عملیات';
var qeshmInfo = '<span dir="rtl">آدرس: قشم، میدان گلها، ساختمان جهان مورا<br>تلفن: 2-35244970 (076) 98+ <br> فکس: 35244973 (076) 98+ </span>';
var esfahanInfo = '<span dir="rtl"> آدرس: اصفهان، خیابان باهنر، ساختمان اسپادانا سامان، طبقه پنجم، واحد ۱ و ۲ <br> تلفن: 4-33385140 (031) 98+ <br>فکس: 33379344 (031) 98+ </span>';
var tehranInfo = '<span dir="rtl">آدرس: خیابان مطهری – خیابان میرعماد، کوچه چهارم، طبقه دوم واحد ۷<br>تلفن: 2-88530671 (021) 98+ <br>فکس: 88753869 (021) 98+</span>';
var bandarInfo = '<span dir="rtl"> آدرس: بلوار امام خمینی، مجتمع نخل گلشهر، طبقه اول، واحد ۷<br> تلفن: 33664581 (076) 98+ <br>فکس: داخلی (115)</span>';


//contact us
var telegram = "<strong>تلگرام: </strong>";
var contactHeader = 'تماس با ما';
var qeshm = 'قشم';
var esfahan = 'اصفهان';
var tehran = 'تهران';
var bandar = 'بندر عباس';
var qeshmP = 'دفتر مرکزی';
var esfahanP = 'دفتر اداری';
var tehranP = 'دفتر بازرگانی';
var bandarP = 'دفتر عملیات';

// <span id="qeshmOfficeH"></span>

function loadFarsi() {
//navigation bar
    document.getElementById("navServices").innerHTML = navServices;
    // document.getElementById("navPortfolio").innerHTML = navPortfolio;
    // document.getElementById("navTeam").innerHTML = navTeam;
    document.getElementById("navAbout").innerHTML = navAbout;
    document.getElementById("navOffices").innerHTML = navOffices;
    document.getElementById("navContact").innerHTML = navContact;

    document.getElementById("servicesHeader").innerHTML = servicesHeader;
//Services
    //services headers
    document.getElementById("oceanHeader").innerHTML = oceanHeader;
    document.getElementById("airHeader").innerHTML = airHeader;
    document.getElementById("roadHeader").innerHTML = roadHeader;
    document.getElementById("railHeader").innerHTML = railHeader;
    document.getElementById("multiHeader").innerHTML = multiHeader;
    document.getElementById("jitHeader").innerHTML = jitHeader;
    //services content
    document.getElementById("oceanContent").innerHTML = ocean;
    document.getElementById("airContent").innerHTML = air;
    document.getElementById("roadContent").innerHTML = road;
    document.getElementById("railContent").innerHTML = rail;
    document.getElementById("modalContent").innerHTML = multi;
    document.getElementById("litContent").innerHTML = jit;
    //modals
    document.getElementById("oceanFreight").innerHTML = oceanHeader;
    document.getElementById("airFreight").innerHTML = airHeader;
    document.getElementById("roadFreight").innerHTML = roadHeader;
    document.getElementById("railFreight").innerHTML = railHeader;
    document.getElementById("multiFreight").innerHTML = multiHeader;


//About us
    document.getElementById("aboutHeader").innerHTML = aboutHeader;
    document.getElementById("aboutDesc").innerHTML = aboutDesc;

//Offices
    document.getElementById("officesHeader").innerHTML = officesHeader;
    //headers
    document.getElementById("qeshmOfficeH").innerHTML = qeshmOffice;
    document.getElementById("isfahanOfficeH").innerHTML = esfahanOffice;
    document.getElementById("tehranOfficeH").innerHTML = tehranOffice;
    document.getElementById("bandarOfficeH").innerHTML = bandarOffice;
    //info
    document.getElementById("qeshmInfo").innerHTML = qeshmInfo;
    document.getElementById("isfahanInfo").innerHTML = esfahanInfo;
    document.getElementById("tehranInfo").innerHTML = tehranInfo;
    document.getElementById("bandarInfo").innerHTML = bandarInfo;

//Contact Us
    document.getElementById("contactusHead").innerHTML = contactHeader;
    document.getElementById("qeshm").innerHTML = qeshm;
    document.getElementById("tehran").innerHTML = tehran;
    document.getElementById("isfahan").innerHTML = esfahan;
    document.getElementById("bandarabbas").innerHTML = bandar;
    document.getElementById("qeshmP").innerHTML = qeshmP;
    document.getElementById("tehranP").innerHTML = tehranP;
    document.getElementById("isfahanP").innerHTML = esfahanP;
    document.getElementById("bandarabbasP").innerHTML = bandarP;
    document.getElementById("telegram").innerHTML = telegram;
    document.getElementById("telIcon").dir = "rtl";
}