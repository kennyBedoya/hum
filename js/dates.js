$(document).ready(function() {

    var initialLocaleCode = 'es';

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'listDay,listWeek,month'
      },

      views: {
        listDay: { buttonText: 'lista día' },
        listWeek: { buttonText: 'lista semana' }
      },

      defaultView: 'listWeek',
      defaultDate: '2018-03-12',
      locale: initialLocaleCode,
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          id: 999,
          title: 'Opening',
          start: '2018-03-09T21:00:00'
        },
        {
          title: 'HUM pres: Toxic Friend + Especial Guest',
          url: 'http://google.com/',
          start: '2018-03-17',
          end: '2018-03-19'
        },
        {
          title: 'Ana G & PSD - Eduardo Posada (Barra Libre)',
          url: 'http://google.com/',
          start: '2018-05-07'

        },
        {
          title: 'X/OZ label night with Exos and Gotshell',
          start: '2018-03-31'
        },
        {
          title: 'HUM pres: Synthek',
          start: '2018-04-07'
        },
        {
          title: 'HUM pres: Northern ELectronics',
          start: '2018-04-17'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-04-28'
        }
      ]
    });




  });