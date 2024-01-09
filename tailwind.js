(function () {
  tailwind.config = {
    theme: {
      extend: {
        screens: {
          '5k': '5120px',
          '4k': '2560px',
          '3xl': '1920px',
          '2xl': '1440px',
          'xl': '1280px',
          'lg': '1024px',
          'md': '768px',
          'sm': '640px',
          'xs': '480px',
          'xxs': '320px',
          'xxxs': '240px',
        },
        colors:{
          mainbg: '#EAEEFF',
          backtoworkplace: '#6885FF',
          backtoworkplacehover: '#4F6BFF',
          menuactive: '#FAFAFA',
          menutitle: '#1D2129',
          menubadge: '#FFE7DC',
          menubadgecolor: '#F67335',
          userinfokey: '#86909C',
          userinfoval: '#1D2129',
          userinfochange: '#165DFF',
          userinfochangehover: '#0A4AFF',
          userbadgebg: '#F2F3F5',
          primary: '#165dff',
          primary1: '#4e6cf7',
          primary2: '#6f87f7',
          gray1: '#808080',
          gray2: '#b7b7b7',
          gray3: '#f7f9fa',
          text1: '#1c1523',
          text2: '#252529',
          bgDeep: '#090e34',
          border1: '#e7e7e7',
          red1: '#ff5733',
          red2: '#f08d7a',
          bgGray: 'rgba(255,255,255,0.1)',
          gradientFrom: 'rgba(74,109,247,0.67)',
          gradientTo: 'rgba(74,108,247,1)',
        },
        boxShadow: {
          'menubadge': '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
        },
        lineHeight: {
          '12': '3rem',
          '14': '3.5rem',
          '20': '5rem',
          '30': '7.5rem',
        },
        flex: {
          '2': '2 2 0%',
          '3': '3 3 0%',
          '4': '4 4 0%',
          '5': '5 5 0%',
        },
        spacing: {
          '1/20': '5%',
          'p4': '15px',
        },
        height: {
          '23': '5.75rem',
          '25': '6.25rem',
          '30': '7.5rem',
          '100': '25rem',
          '120': '30rem',
          '140': '35rem',
        },
        width: {
          '23': '5.75rem',
          '25': '6.25rem',
          '30': '7.5rem',
          '72': '18rem',
          '88': '22rem',
          '100': '25rem',
          '120': '30rem',
          '9/10': '90%',
          'p4': 'calc(100% - 30px)'
        },
        maxHeight: {
          '100': '25rem',
          '120': '30rem',
          '140': '35rem',
          '144': '36rem',
        },
        maxWidth: {
          '10': '2.5rem',
          '20': '5rem',
          '30': '7.5rem',
          '40': '10rem',
          '50': '12.5rem',
        },
        minWidth: {
          '80': '20rem',
        },
        minHeight: {
          '20': '5rem',
        },
        fontSize: {
          'xxs': '0.625rem',
        }
      }
    },
    // prefix: 'tl-', // 自定义前缀
  }
})();
