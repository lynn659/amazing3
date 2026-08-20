/* @ds-bundle: {"format":4,"namespace":"AmazingPostnatalDesignSystem_e378c1","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"ProgramCard","sourcePath":"components/ProgramCard/ProgramCard.jsx"},{"name":"SectionHeading","sourcePath":"components/SectionHeading/SectionHeading.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"d8a363b7ea6e","components/ProgramCard/ProgramCard.jsx":"8b47d32a4b29","components/SectionHeading/SectionHeading.jsx":"4a7216aa14a0","ui_kits/marketing_site/App.jsx":"638e6896df63","ui_kits/marketing_site/ContactSection.jsx":"17d7e22da56b","ui_kits/marketing_site/GallerySection.jsx":"bb3c9a729a6b","ui_kits/marketing_site/HeroSection.jsx":"2f2d8413c242","ui_kits/marketing_site/ProgramsSection.jsx":"8d1ca2dec52c","ui_kits/marketing_site/SiteFooter.jsx":"b0be98209d16","ui_kits/marketing_site/SiteHeader.jsx":"2d667d9deb0c","ui_kits/marketing_site/StorySection.jsx":"e15fc6643326"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AmazingPostnatalDesignSystem_e378c1 = window.AmazingPostnatalDesignSystem_e378c1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-en)',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 1,
  padding: '15px 28px',
  borderRadius: 'var(--radius-pill)',
  border: 0,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
  letterSpacing: '0.02em',
  transition: 'all var(--dur) var(--ease)',
  textDecoration: 'none'
};
const variants = {
  primary: {
    background: 'var(--rose-deep)',
    color: 'var(--fg-on-rose)',
    boxShadow: 'var(--shadow-petal)'
  },
  sage: {
    background: 'var(--brand-sage-deep)',
    color: 'var(--fg-on-sage)',
    boxShadow: 'var(--shadow)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--brand-bark)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'var(--rose-petal)',
    color: 'var(--rose-deep)'
  }
};
const sizes = {
  sm: {
    padding: '11px 20px',
    fontSize: 15
  },
  md: {},
  lg: {
    padding: '18px 36px',
    fontSize: 18
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...(sizes[size] || {})
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/ProgramCard/ProgramCard.jsx
try { (() => {
function ProgramCard({
  title,
  titleZh,
  description,
  duration
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-en)'
    }
  }, duration && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--brand-sage-deep)',
      background: 'var(--brand-sage-mist)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, duration), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--fg-strong)',
      margin: 0
    }
  }, title), titleZh && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-zh)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--brand-bark)',
      letterSpacing: '0.08em'
    }
  }, titleZh), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--fg-muted)',
      lineHeight: 1.65,
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProgramCard/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/SectionHeading/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      fontFamily: 'var(--font-en)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--brand-bark)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-en-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px, 4vw, 46px)',
      color: 'var(--fg-strong)',
      margin: '18px 0 10px',
      lineHeight: 1.15
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-zh)',
      fontWeight: 300,
      fontSize: 17,
      color: 'var(--fg-muted)',
      letterSpacing: '0.12em'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SectionHeading/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/App.jsx
try { (() => {
/* App — orchestrates state, dialogs, toast */
function App() {
  const [lang, setLang] = React.useState('en');
  const [current, setCurrent] = React.useState('home');
  const [modal, setModal] = React.useState(null); // { kind: 'visit' | 'program', program?: ... }
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const onNav = id => {
    setCurrent(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: 'smooth'
    });
  };
  const openVisit = () => setModal({
    kind: 'visit'
  });
  const openProgram = program => setModal({
    kind: 'program',
    program
  });
  const handleSubmit = form => {
    setToast(lang === 'en' ? `Thank you, ${form.name || 'friend'}. We\u2019ll call within a day.` : `谢谢您${form.name ? '，' + form.name : ''}。我们会在一天内联系您。`);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    lang: lang,
    onLang: setLang,
    onCTA: openVisit,
    onNav: onNav,
    current: current
  }), /*#__PURE__*/React.createElement(HeroSection, {
    lang: lang,
    onCTA: openVisit,
    onSecondary: () => onNav('programs')
  }), /*#__PURE__*/React.createElement(ProgramsSection, {
    lang: lang,
    onPick: openProgram
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(NumbersBar, {
    lang: lang
  })), /*#__PURE__*/React.createElement(StorySection, {
    lang: lang
  }), /*#__PURE__*/React.createElement(GallerySection, {
    lang: lang
  }), /*#__PURE__*/React.createElement(ContactSection, {
    lang: lang,
    onSubmit: handleSubmit
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    lang: lang
  }), modal && /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: () => setModal(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: () => setModal(null)
  }, "\u2715"), modal.kind === 'visit' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "sparkle",
    src: "../../assets/element-sparkle.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", null, lang === 'en' ? 'Let\u2019s plan your visit' : '一起规划您的到访'), /*#__PURE__*/React.createElement("div", {
    className: "zh"
  }, lang === 'en' ? '我们会陪您看一看花园之家' : 'We\u2019ll walk through The Garden House with you'), /*#__PURE__*/React.createElement("p", null, lang === 'en' ? 'Tell us when you\u2019d like to come, and we\u2019ll meet you at the door with tea.' : '告诉我们您希望什么时候来，我们会在门口为您泡好茶。'), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      setModal(null);
      onNav('visit');
    }
  }, lang === 'en' ? 'Open the form' : '打开预约表单', " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))), modal.kind === 'program' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "sparkle",
    src: `../../assets/${modal.program.leaf}`,
    style: {
      height: 80
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", null, modal.program.title[lang]), /*#__PURE__*/React.createElement("div", {
    className: "zh"
  }, modal.program.duration[lang]), /*#__PURE__*/React.createElement("p", null, modal.program.desc[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setModal(null)
  }, lang === 'en' ? 'Close' : '稍后再看'), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      setModal({
        kind: 'visit'
      });
    }
  }, lang === 'en' ? 'Book this' : '预约此方案', " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))))), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, toast));
}
window.App = App;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ContactSection.jsx
try { (() => {
/* ContactSection — form + info, with controlled state */
function ContactSection({
  lang,
  onSubmit
}) {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    due: '',
    program: 'full'
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    onSubmit(form);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "visit",
    className: "wash-sage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, lang === 'en' ? 'BOOK A VISIT' : '到访预约'), /*#__PURE__*/React.createElement("h2", null, lang === 'en' ? 'Come walk through with us' : '来走一走，看看是否合适')), /*#__PURE__*/React.createElement("div", {
    className: "contact contact-inner"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, lang === 'en' ? 'YOUR NAME · 姓名' : '姓名 · NAME'), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: set('name'),
    required: true,
    placeholder: lang === 'en' ? 'Mrs. Lin' : '林女士'
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, lang === 'en' ? 'PHONE · 电话' : '电话 · PHONE'), /*#__PURE__*/React.createElement("input", {
    value: form.phone,
    onChange: set('phone'),
    required: true,
    placeholder: "+86 138 0000 0000"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, lang === 'en' ? 'DUE DATE · 预产期' : '预产期 · DUE'), /*#__PURE__*/React.createElement("input", {
    value: form.due,
    onChange: set('due'),
    type: "text",
    placeholder: "2026 / 06 / 12"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, lang === 'en' ? 'PROGRAM · 服务方案' : '服务方案 · PROGRAM'), /*#__PURE__*/React.createElement("select", {
    value: form.program,
    onChange: set('program')
  }, /*#__PURE__*/React.createElement("option", {
    value: "gentle"
  }, lang === 'en' ? 'Gentle Start · 14 days' : '温柔起航 · 14 天'), /*#__PURE__*/React.createElement("option", {
    value: "full"
  }, lang === 'en' ? 'Full Confinement · 26 days' : '完整月子 · 26 天'), /*#__PURE__*/React.createElement("option", {
    value: "extended"
  }, lang === 'en' ? 'Extended Care · 42 days' : '深度呵护 · 42 天'), /*#__PURE__*/React.createElement("option", {
    value: "undecided"
  }, lang === 'en' ? 'Still deciding' : '还在了解'))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    style: {
      alignSelf: 'flex-start',
      marginTop: 8
    }
  }, lang === 'en' ? 'Send & we\u2019ll call' : '提交，我们会联系您', " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("h3", null, lang === 'en' ? 'The Garden House' : '花园之家'), /*#__PURE__*/React.createElement("p", null, lang === 'en' ? 'Our flagship home sits among camphor trees at the edge of the city — fifteen private suites, two gardens, one quiet kitchen.' : '我们的旗舰之家坐落在城郊的樟树林间 — 十五间独立套房、两座庭院、一间安静的厨房。'), /*#__PURE__*/React.createElement("div", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 18,
      height: 18,
      color: 'var(--rose-deep)',
      strokeWidth: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, lang === 'en' ? 'No. 12, Camphor Lane, Hangzhou' : '杭州 · 樟林路 12 号'), /*#__PURE__*/React.createElement("span", null, lang === 'en' ? 'Visits by appointment · daily 10am–6pm' : '预约到访 · 每日 10:00–18:00'))), /*#__PURE__*/React.createElement("div", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ico"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 18,
      height: 18,
      color: 'var(--brand-sage-deep)',
      strokeWidth: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "+86 571 2000 0000"), /*#__PURE__*/React.createElement("span", null, lang === 'en' ? '微信 · Amazing-Postnatal' : '微信号 · Amazing-Postnatal')))))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/GallerySection.jsx
try { (() => {
/* GallerySection — placeholder image tiles + NumbersBar */
function GallerySection({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "wash-petal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, lang === 'en' ? 'INSIDE THE HOME' : '走进我们'), /*#__PURE__*/React.createElement("h2", null, lang === 'en' ? 'Warm, quiet, unhurried' : '温暖、安静、从容')), /*#__PURE__*/React.createElement("div", {
    className: "gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile tile-1"
  }, /*#__PURE__*/React.createElement("img", {
    className: "leaf-watermark",
    src: "../../assets/element-leaf-4-rose.png",
    alt: ""
  }), lang === 'en' ? 'The nursery' : '婴儿房'), /*#__PURE__*/React.createElement("div", {
    className: "tile tile-2"
  }, /*#__PURE__*/React.createElement("img", {
    className: "leaf-watermark",
    src: "../../assets/element-leaf-8-sage-light.png",
    alt: ""
  }), lang === 'en' ? 'Outdoor garden' : '庭院'), /*#__PURE__*/React.createElement("div", {
    className: "tile tile-3"
  }, lang === 'en' ? 'Daily 月子餐' : '每日月子餐'), /*#__PURE__*/React.createElement("div", {
    className: "tile tile-4"
  }, lang === 'en' ? 'Mother\u2019s suite' : '妈妈套房'), /*#__PURE__*/React.createElement("div", {
    className: "tile tile-5"
  }, /*#__PURE__*/React.createElement("img", {
    className: "leaf-watermark",
    src: "../../assets/element-leaf-6-silver.png",
    alt: "",
    style: {
      opacity: 0.4
    }
  }), lang === 'en' ? 'Lactation room' : '哺乳室'))));
}
function NumbersBar({
  lang
}) {
  const STATS = [{
    num: '10',
    unit: '+',
    label: {
      en: 'YEARS OF CARE',
      zh: '专业年限'
    }
  }, {
    num: '4,000',
    unit: '+',
    label: {
      en: 'FAMILIES',
      zh: '陪伴家庭'
    }
  }, {
    num: '120',
    unit: '',
    label: {
      en: 'CERTIFIED 月嫂',
      zh: '认证月嫂'
    }
  }, {
    num: '4.9',
    unit: '/5',
    label: {
      en: 'AVG. RATING',
      zh: '平均评分'
    }
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numbers"
  }, STATS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.num, /*#__PURE__*/React.createElement("span", {
    className: "unit"
  }, s.unit)), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, s.label.en), /*#__PURE__*/React.createElement("div", {
    className: "label-zh"
  }, s.label.zh)))));
}
window.GallerySection = GallerySection;
window.NumbersBar = NumbersBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/GallerySection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/HeroSection.jsx
try { (() => {
/* HeroSection — centered logo + tagline + soft background blobs */
function HeroSection({
  lang,
  onCTA,
  onSecondary
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "home",
    style: {
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-blob-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-blob-2"
  }), /*#__PURE__*/React.createElement("img", {
    className: "hero-leaf",
    src: "../../assets/element-leaf-8-sage-light.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/element-leaf-4-rose.png",
    alt: "",
    style: {
      position: 'absolute',
      left: '6%',
      bottom: '18%',
      height: 90,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/element-sparkle.png",
    alt: "",
    style: {
      position: 'absolute',
      left: '12%',
      top: '18%',
      height: 42,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/element-sparkle.png",
    alt: "",
    style: {
      position: 'absolute',
      right: '18%',
      bottom: '24%',
      height: 30,
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, lang === 'en' ? 'POSTNATAL CARE · SINCE 2014' : '专业月子护理 · 自 2014'), lang === 'en' ? /*#__PURE__*/React.createElement("h1", null, "Amazing care", /*#__PURE__*/React.createElement("br", null), "for an ", /*#__PURE__*/React.createElement("em", null, "amazing"), " life.") : /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-zh)',
      fontWeight: 200,
      letterSpacing: '0.04em',
      lineHeight: 1.2
    }
  }, "\u6E29\u67D4\u966A\u4F34", /*#__PURE__*/React.createElement("br", null), "\u6BCF\u4E00\u4E2A ", /*#__PURE__*/React.createElement("em", null, "\u65B0"), "\u5F00\u59CB"), /*#__PURE__*/React.createElement("div", {
    className: "hero-zh"
  }, lang === 'en' ? '生命的起源，幸福的源泉' : 'Amazing Care For Amazing Life'), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCTA
  }, lang === 'en' ? 'Begin together' : '开始陪伴之旅', " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onSecondary
  }, lang === 'en' ? 'See our programs' : '了解月子服务')))));
}
window.HeroSection = HeroSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ProgramsSection.jsx
try { (() => {
/* ProgramsSection + ProgramTile */
const PROGRAMS = [{
  id: 'gentle-start',
  leaf: 'element-leaf-2-sand.png',
  duration: {
    en: '14 DAYS',
    zh: '14 天'
  },
  title: {
    en: 'Gentle Start',
    zh: '温柔起航'
  },
  desc: {
    en: 'A two-week resident 月嫂 for first-time families finding their rhythm together.',
    zh: '两周驻家月嫂陪伴，为新手家庭找到属于自己的节奏。'
  }
}, {
  id: 'full-confinement',
  leaf: 'element-leaf-8-sage-light.png',
  duration: {
    en: '26 DAYS',
    zh: '26 天'
  },
  title: {
    en: 'Full Confinement',
    zh: '完整月子'
  },
  desc: {
    en: 'Our flagship — around-the-clock care, daily 月子餐, and gentle baby massage.',
    zh: '招牌方案，24 小时陪护，每日月子餐，温柔抚触。'
  }
}, {
  id: 'extended-care',
  leaf: 'element-leaf-4-rose.png',
  duration: {
    en: '42 DAYS',
    zh: '42 天'
  },
  title: {
    en: 'Extended Care',
    zh: '深度呵护'
  },
  desc: {
    en: 'For mothers who want extra time. Two months of layered support, indoors and out.',
    zh: '为希望更多陪伴的妈妈而设。两个月分阶段的支持。'
  }
}];
function ProgramTile({
  program,
  lang,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "program",
    onClick: onPick
  }, /*#__PURE__*/React.createElement("img", {
    className: "leaf",
    src: `../../assets/${program.leaf}`,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "duration"
  }, program.duration[lang]), /*#__PURE__*/React.createElement("h3", null, program.title[lang]), lang === 'en' && /*#__PURE__*/React.createElement("div", {
    className: "zh"
  }, program.title.zh), /*#__PURE__*/React.createElement("p", null, program.desc[lang]), /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"));
}
function ProgramsSection({
  lang,
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "programs",
    className: "wash-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, lang === 'en' ? 'CARE PROGRAMS' : '月子服务'), /*#__PURE__*/React.createElement("h2", null, lang === 'en' ? 'Three ways to begin' : '三种开始陪伴的方式'), /*#__PURE__*/React.createElement("div", {
    className: "sub-zh"
  }, lang === 'en' ? '每个家庭都有自己的节奏 — 我们陪伴 14、26 或 42 天。' : 'Every family has its own rhythm — we accompany you for 14, 26 or 42 days.')), /*#__PURE__*/React.createElement("div", {
    className: "programs"
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(ProgramTile, {
    key: p.id,
    program: p,
    lang: lang,
    onPick: () => onPick(p)
  })))));
}
window.ProgramsSection = ProgramsSection;
window.PROGRAMS = PROGRAMS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ProgramsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/SiteFooter.jsx
try { (() => {
/* SiteFooter — wave + pin transition, then links */
function SiteFooter({
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-wave"
  }, /*#__PURE__*/React.createElement("img", {
    className: "wave",
    src: "../../assets/element-wave.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "pin",
    src: "../../assets/element-icon-pin.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, lang === 'en' ? 'Amazing Care For Amazing Life. Postnatal care, family by family, since 2014.' : '生命的起源，幸福的源泉。一家一户的陪伴，自 2014 年起。')), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, lang === 'en' ? 'Care' : '服务'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Gentle Start' : '温柔起航'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Full Confinement' : '完整月子'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Extended Care' : '深度呵护'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Lactation support' : '哺乳支持')), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, lang === 'en' ? 'House' : '关于'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Our team' : '我们的团队'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'The garden house' : '花园之家'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Family stories' : '家人故事'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Daily 月子餐' : '每日月子餐')), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, lang === 'en' ? 'Visit' : '到访'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? 'Book a visit' : '预约到访'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, lang === 'en' ? '微信 · Amazing-Postnatal' : '微信 · Amazing-Postnatal'), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "+86 571 2000 0000"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Amazing Postnatal Care \xB7 \u676D\u5DDE\u82B1\u6F3E\u6BCD\u5A74\u62A4\u7406\u6709\u9650\u516C\u53F8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u9690\u79C1\u6761\u6B3E")))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/SiteHeader.jsx
try { (() => {
/* SiteHeader · NavBar · LangSwitch */
function SiteHeader({
  lang,
  onLang,
  onCTA,
  onNav,
  current
}) {
  const NAV = [{
    id: 'home',
    en: 'Home',
    zh: '首页'
  }, {
    id: 'programs',
    en: 'Programs',
    zh: '月子服务'
  }, {
    id: 'story',
    en: 'Stories',
    zh: '家人故事'
  }, {
    id: 'visit',
    en: 'Visit',
    zh: '到访'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: "../../assets/logo.png",
    alt: "Amazing Postnatal Care"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    className: current === n.id ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, lang === 'en' ? n.en : n.zh))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-switch"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === 'en' ? 'on' : '',
    onClick: () => onLang('en')
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    className: lang === 'zh' ? 'on' : '',
    onClick: () => onLang('zh')
  }, "\u4E2D")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCTA
  }, lang === 'en' ? 'Book a visit' : '预约咨询', " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/StorySection.jsx
try { (() => {
/* StorySection — testimonial card with pink ribbon header */
function StorySection({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, lang === 'en' ? 'FAMILY STORIES' : '家人故事'), /*#__PURE__*/React.createElement("h2", null, lang === 'en' ? 'In our families\u2019 own words' : '听家人们怎么说')), /*#__PURE__*/React.createElement("div", {
    className: "story-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ribbon-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/element-ribbon-pink.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "ribbon-text"
  }, "A FAMILY STORY")), /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, lang === 'en' ? '"The first night home was the night I was most afraid of. Auntie Wei was there before I even knew what to ask for. Everything since has felt like a soft landing."' : '"回家的第一晚是我最害怕的一晚。卫阿姨在我开口之前就已经在了。之后的每一天都像在被温柔接住。"'), /*#__PURE__*/React.createElement("div", {
    className: "quote-zh"
  }, lang === 'en' ? '回家的第一晚，被温柔接住的感觉。' : 'The night we came home — gently held.'), /*#__PURE__*/React.createElement("div", {
    className: "attribution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "L"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "attr-name"
  }, "Lin Yuxi \xB7 \u6797\u96E8\u66E6"), /*#__PURE__*/React.createElement("div", {
    className: "attr-meta"
  }, lang === 'en' ? 'FULL CONFINEMENT · 2025' : '完整月子 · 2025'))))));
}
window.StorySection = StorySection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/StorySection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
