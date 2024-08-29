const synonyms = {
  react: ['ری‌اکت', 'reactjs', 'قثشزف'],
  vue: ['ویو', 'vuejs', 'رهث'],
  angular: ['انگولار', 'angularjs', 'شدلعمشق'],
  gatsbyjs: ['گتسبی', 'gatsby', 'لشفسذغ'],
  gridsome: ['گرید سام', 'لقهیسخپث'],
  static: ['استاتیک', 'سفشفهز'],
  nodejs: ['نود جی اس', 'node', 'نود', 'دخیث'],
  nestjs: ['نست جی اس', 'نست', 'nest', 'دثسف'],
  nextjs: ['نکست', 'نکست جی اس', 'next', 'دثطف'],
  strapi: ['استرپی', 'strapijs', 'استرپی جی اس', 'سفقشحه'],
  adonis: ['adonisjs', 'ادانیس', 'شیخدهس'],
  laravel: ['لاراول', 'مشقشرثم'],
  wordpress: ['وردپرس', 'cms', 'صخقیحقثسس'],
  django: ['جنگو', 'یتشدلخ'],
  flask: ['فلسک', 'بمشسن'],
  docker: ['داکر', 'یخزنثق'],
  '.net': [
    'dot net',
    'dotnet',
    'دات نت',
    'asp',
    'asp.net Core',
    'net core',
    'شسح',
    'یخفدثف',
  ],
  mysql: ['مای اس کیو ال', 'پغسضم', 'sql', 'سضم'],
  mariadb: ['ماریا دی بی', 'پشقهشیذ', 'sql', 'سضم'],
  postgresql: ['پستگرس', 'postgres', 'حخسفلقثس', 'حخسفلقثسضم', 'sql', 'سضم'],
  'sql server': ['اس کیو ال سرور', 'سضم سثقرثق', 'سضم', 'sql'],
  mongodb: ['مونگو', 'مونگو دی بی', 'پخدلخ', 'پخدلخیذ'],
  redis: ['ردیس', 'قثیهس'],
  pusher: ['پوشر', 'وب سوکت', 'web socket', 'حعساثق'],
  soketi: ['سوکتی', 'سخنثفه'],
  ghost: ['گست', 'cms', 'لاخسف'],
  pocketbase: ['پاکتبیس', 'پاکت بیس', 'حخزنثفذشسث'],
  'rocket.chat': ['راکت چت', 'rocket chat', 'قخخزنثفزاشف', 'قخخزنثف زاشف'],
  gitea: ['گیتی', 'گیتیی', 'لهفثش'],
  metabase: ['متابیس', 'پثفشذشسث'],
  chrome: ['کروم', 'زاقخپث'],
  nextcloud: ['نکست کلود', 'دثطف زمخعی'],
  imgproxy: ['image proxy', 'ایمیج پروکسی', 'هپلحقخطغ'],
  yii: ['غهه'],
  prestashop: ['پرستاشاپ', 'حقثسفشساخح'],
  nginx: ['انجینیکس', 'دلهدط'],
  go: ['گو', 'لخ'],
  elastic: ['الستیک', 'الاستیک', 'ثمشسفهز', 'elasticsearch'],
  kibana: ['کیبانا', 'نهذشدش'],
  grafana: ['گرافانا', 'لقشبشدش'],
  mttermost: ['پشففثقپخسف'],
  rabbitmq: ['قشذذهفپض'],
  arangodb: ['قشدلخیذ'],
  seq: ['سثض'],
  celery: ['سلری', 'زثمثقغ'],
  php: ['پی اچ پی', 'حاح'],
  subdomain: ['زیر‌دامنه', 'ساب‌دامنه', 'ساب دامنه', 'زیر دامنه', 'سعذیخپشهد'],
  'private network': ['شبکه خصوصی', 'شبکه'],
  mirror: ['میرور', 'میررور', 'پهققخق'],
  disks: ['دیسک‌ها', 'یهسنس'],
  api: ['ای پی آی', 'شحه'],
  hugo: ['هوگو', 'اعلخ'],
  eleventy: ['الونتی', 'ثمثرثدفغ'],
  jekyll: ['جکیل', 'تثنغمم'],
  fastify: ['فستیفای', 'بشسفهبغ'],
  svelte: ['اسولت', 'سرثمفث'],
  python: ['پایتون', 'حغفاخد'],
  cron: ['کران', 'زقخد'],
  job: ['تخذ', 'جاب'],
  supercronic: ['سعحثقزقخدهز', 'سوپرکرانیک'],
  IP: ['آی‌پی ثابت', 'آی پی', 'ip', 'هح'],
  websocket: ['وب‌سوکت', 'وب سوکت', 'صثذ سخخزنثف'],
  flutter: ['فلاتر', 'flatter', 'بمعففثق'],
};

export const synonymsParser = (synonymsList) => {
  const result = {};
  for (const [key, values] of Object.entries(synonymsList)) {
    for (const value of values) {
      result[value] = [key];
    }
  }
  return result;
};

export default synonymsParser(synonyms);