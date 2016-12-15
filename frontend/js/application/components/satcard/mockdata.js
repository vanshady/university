const mockdata = [
    {
        date: '24-Apr-07',
        close: '93.24',
    },
    {
        date: '25-Apr-07',
        close: '95.35',
    },
    {
        date: '26-Apr-07',
        close: '98.84',
    },
    {
        date: '27-Apr-07',
        close: '99.92',
    },
    {
        date: '30-Apr-07',
        close: '99.80',
    },
    {
        date: '1-May-07',
        close: '99.47',
    },
    {
        date: '2-May-07',
        close: '100.39',
    },
    {
        date: '3-May-07',
        close: '100.40',
    },
    {
        date: '4-May-07',
        close: '100.81',
    },
    {
        date: '7-May-07',
        close: '103.92',
    },
    {
        date: '8-May-07',
        close: '105.06',
    },
    {
        date: '9-May-07',
        close: '106.88',
    },
    {
        date: '10-May-07',
        close: '107.34',
    },
    {
        date: '11-May-07',
        close: '108.74',
    },
    {
        date: '14-May-07',
        close: '109.36',
    },
    {
        date: '15-May-07',
        close: '107.52',
    },
    {
        date: '16-May-07',
        close: '107.34',
    },
    {
        date: '17-May-07',
        close: '109.44',
    },
    {
        date: '18-May-07',
        close: '110.02',
    },
    {
        date: '21-May-07',
        close: '111.98',
    },
    {
        date: '22-May-07',
        close: '113.54',
    },
    {
        date: '23-May-07',
        close: '112.89',
    },
    {
        date: '24-May-07',
        close: '110.69',
    },
    {
        date: '25-May-07',
        close: '113.62',
    },
    {
        date: '29-May-07',
        close: '114.35',
    },
    {
        date: '30-May-07',
        close: '118.77',
    },
    {
        date: '31-May-07',
        close: '121.19',
    },
    {
        date: '1-Jun-07',
        close: '118.40',
    },
    {
        date: '4-Jun-07',
        close: '121.33',
    },
    {
        date: '5-Jun-07',
        close: '122.67',
    },
    {
        date: '6-Jun-07',
        close: '123.64',
    },
    {
        date: '7-Jun-07',
        close: '124.07',
    },
    {
        date: '8-Jun-07',
        close: '124.49',
    },
    {
        date: '11-Jun-07',
        close: '120.19',
    },
    {
        date: '12-Jun-07',
        close: '120.38',
    },
    {
        date: '13-Jun-07',
        close: '117.50',
    },
    {
        date: '14-Jun-07',
        close: '118.75',
    },
    {
        date: '15-Jun-07',
        close: '120.50',
    },
    {
        date: '18-Jun-07',
        close: '125.09',
    },
    {
        date: '19-Jun-07',
        close: '123.66',
    },
    {
        date: '20-Jun-07',
        close: '121.55',
    },
    {
        date: '21-Jun-07',
        close: '123.90',
    },
    {
        date: '22-Jun-07',
        close: '123.00',
    },
    {
        date: '25-Jun-07',
        close: '122.34',
    },
    {
        date: '26-Jun-07',
        close: '119.65',
    },
    {
        date: '27-Jun-07',
        close: '121.89',
    },
    {
        date: '28-Jun-07',
        close: '120.56',
    },
    {
        date: '29-Jun-07',
        close: '122.04',
    },
    {
        date: '2-Jul-07',
        close: '121.26',
    },
    {
        date: '3-Jul-07',
        close: '127.17',
    },
    {
        date: '5-Jul-07',
        close: '132.75',
    },
    {
        date: '6-Jul-07',
        close: '132.30',
    },
    {
        date: '9-Jul-07',
        close: '130.33',
    },
    {
        date: '10-Jul-07',
        close: '132.35',
    },
    {
        date: '11-Jul-07',
        close: '132.39',
    },
    {
        date: '12-Jul-07',
        close: '134.07',
    },
    {
        date: '13-Jul-07',
        close: '137.73',
    },
    {
        date: '16-Jul-07',
        close: '138.10',
    },
    {
        date: '17-Jul-07',
        close: '138.91',
    },
    {
        date: '18-Jul-07',
        close: '138.12',
    },
    {
        date: '19-Jul-07',
        close: '140.00',
    },
    {
        date: '20-Jul-07',
        close: '143.75',
    },
    {
        date: '23-Jul-07',
        close: '143.70',
    },
    {
        date: '24-Jul-07',
        close: '134.89',
    },
    {
        date: '25-Jul-07',
        close: '137.26',
    },
    {
        date: '26-Jul-07',
        close: '146.00',
    },
    {
        date: '27-Jul-07',
        close: '143.85',
    },
    {
        date: '30-Jul-07',
        close: '141.43',
    },
    {
        date: '31-Jul-07',
        close: '131.76',
    },
    {
        date: '1-Aug-07',
        close: '135.00',
    },
    {
        date: '2-Aug-07',
        close: '136.49',
    },
    {
        date: '3-Aug-07',
        close: '131.85',
    },
    {
        date: '6-Aug-07',
        close: '135.25',
    },
    {
        date: '7-Aug-07',
        close: '135.03',
    },
    {
        date: '8-Aug-07',
        close: '134.01',
    },
    {
        date: '9-Aug-07',
        close: '126.39',
    },
    {
        date: '10-Aug-07',
        close: '125.00',
    },
    {
        date: '13-Aug-07',
        close: '127.79',
    },
    {
        date: '14-Aug-07',
        close: '124.03',
    },
    {
        date: '15-Aug-07',
        close: '119.90',
    },
    {
        date: '16-Aug-07',
        close: '117.05',
    },
    {
        date: '17-Aug-07',
        close: '122.06',
    },
    {
        date: '20-Aug-07',
        close: '122.22',
    },
    {
        date: '21-Aug-07',
        close: '127.57',
    },
    {
        date: '22-Aug-07',
        close: '132.51',
    },
    {
        date: '23-Aug-07',
        close: '131.07',
    },
    {
        date: '24-Aug-07',
        close: '135.30',
    },
    {
        date: '27-Aug-07',
        close: '132.25',
    },
    {
        date: '28-Aug-07',
        close: '126.82',
    },
    {
        date: '29-Aug-07',
        close: '134.08',
    },
    {
        date: '30-Aug-07',
        close: '136.25',
    },
    {
        date: '31-Aug-07',
        close: '138.48',
    },
    {
        date: '4-Sep-07',
        close: '144.16',
    },
    {
        date: '5-Sep-07',
        close: '136.76',
    },
    {
        date: '6-Sep-07',
        close: '135.01',
    },
    {
        date: '7-Sep-07',
        close: '131.77',
    },
    {
        date: '10-Sep-07',
        close: '136.71',
    },
    {
        date: '11-Sep-07',
        close: '135.49',
    },
    {
        date: '12-Sep-07',
        close: '136.85',
    },
    {
        date: '13-Sep-07',
        close: '137.20',
    },
    {
        date: '14-Sep-07',
        close: '138.81',
    },
    {
        date: '17-Sep-07',
        close: '138.41',
    },
    {
        date: '18-Sep-07',
        close: '140.92',
    },
    {
        date: '19-Sep-07',
        close: '140.77',
    },
    {
        date: '20-Sep-07',
        close: '140.31',
    },
    {
        date: '21-Sep-07',
        close: '144.15',
    },
    {
        date: '24-Sep-07',
        close: '148.28',
    },
    {
        date: '25-Sep-07',
        close: '153.18',
    },
    {
        date: '26-Sep-07',
        close: '152.77',
    },
    {
        date: '27-Sep-07',
        close: '154.50',
    },
    {
        date: '28-Sep-07',
        close: '153.47',
    },
    {
        date: '1-Oct-07',
        close: '156.34',
    },
    {
        date: '2-Oct-07',
        close: '158.45',
    },
    {
        date: '3-Oct-07',
        close: '157.92',
    },
    {
        date: '4-Oct-07',
        close: '156.24',
    },
    {
        date: '5-Oct-07',
        close: '161.45',
    },
    {
        date: '8-Oct-07',
        close: '167.91',
    },
    {
        date: '9-Oct-07',
        close: '167.86',
    },
    {
        date: '10-Oct-07',
        close: '166.79',
    },
    {
        date: '11-Oct-07',
        close: '162.23',
    },
    {
        date: '12-Oct-07',
        close: '167.25',
    },
    {
        date: '15-Oct-07',
        close: '166.98',
    },
    {
        date: '16-Oct-07',
        close: '169.58',
    },
    {
        date: '17-Oct-07',
        close: '172.75',
    },
    {
        date: '18-Oct-07',
        close: '173.50',
    },
    {
        date: '19-Oct-07',
        close: '170.42',
    },
    {
        date: '22-Oct-07',
        close: '174.36',
    },
    {
        date: '23-Oct-07',
        close: '186.16',
    },
    {
        date: '24-Oct-07',
        close: '185.93',
    },
    {
        date: '25-Oct-07',
        close: '182.78',
    },
    {
        date: '26-Oct-07',
        close: '184.70',
    },
    {
        date: '29-Oct-07',
        close: '185.09',
    },
    {
        date: '30-Oct-07',
        close: '187.00',
    },
    {
        date: '31-Oct-07',
        close: '189.95',
    },
    {
        date: '1-Nov-07',
        close: '187.44',
    },
    {
        date: '2-Nov-07',
        close: '187.87',
    },
    {
        date: '5-Nov-07',
        close: '186.18',
    },
    {
        date: '6-Nov-07',
        close: '191.79',
    },
    {
        date: '7-Nov-07',
        close: '186.30',
    },
    {
        date: '8-Nov-07',
        close: '175.47',
    },
    {
        date: '9-Nov-07',
        close: '165.37',
    },
    {
        date: '12-Nov-07',
        close: '153.76',
    },
    {
        date: '13-Nov-07',
        close: '169.96',
    },
    {
        date: '14-Nov-07',
        close: '166.11',
    },
    {
        date: '15-Nov-07',
        close: '164.30',
    },
    {
        date: '16-Nov-07',
        close: '166.39',
    },
    {
        date: '19-Nov-07',
        close: '163.95',
    },
    {
        date: '20-Nov-07',
        close: '168.85',
    },
    {
        date: '21-Nov-07',
        close: '168.46',
    },
    {
        date: '23-Nov-07',
        close: '171.54',
    },
    {
        date: '26-Nov-07',
        close: '172.54',
    },
    {
        date: '27-Nov-07',
        close: '174.81',
    },
    {
        date: '28-Nov-07',
        close: '180.22',
    },
    {
        date: '29-Nov-07',
        close: '184.29',
    },
    {
        date: '30-Nov-07',
        close: '182.22',
    },
    {
        date: '3-Dec-07',
        close: '178.86',
    },
    {
        date: '4-Dec-07',
        close: '179.81',
    },
    {
        date: '5-Dec-07',
        close: '185.50',
    },
    {
        date: '6-Dec-07',
        close: '189.95',
    },
    {
        date: '7-Dec-07',
        close: '194.30',
    },
    {
        date: '10-Dec-07',
        close: '194.21',
    },
    {
        date: '11-Dec-07',
        close: '188.54',
    },
    {
        date: '12-Dec-07',
        close: '190.86',
    },
    {
        date: '13-Dec-07',
        close: '191.83',
    },
    {
        date: '14-Dec-07',
        close: '190.39',
    },
    {
        date: '17-Dec-07',
        close: '184.40',
    },
    {
        date: '18-Dec-07',
        close: '182.98',
    },
    {
        date: '19-Dec-07',
        close: '183.12',
    },
    {
        date: '20-Dec-07',
        close: '187.21',
    },
    {
        date: '21-Dec-07',
        close: '193.91',
    },
    {
        date: '24-Dec-07',
        close: '198.80',
    },
    {
        date: '26-Dec-07',
        close: '198.95',
    },
    {
        date: '27-Dec-07',
        close: '198.57',
    },
    {
        date: '28-Dec-07',
        close: '199.83',
    },
    {
        date: '31-Dec-07',
        close: '198.08',
    },
    {
        date: '2-Jan-08',
        close: '194.84',
    },
    {
        date: '3-Jan-08',
        close: '194.93',
    },
    {
        date: '4-Jan-08',
        close: '180.05',
    },
    {
        date: '7-Jan-08',
        close: '177.64',
    },
    {
        date: '8-Jan-08',
        close: '171.25',
    },
    {
        date: '9-Jan-08',
        close: '179.40',
    },
    {
        date: '10-Jan-08',
        close: '178.02',
    },
    {
        date: '11-Jan-08',
        close: '172.69',
    },
    {
        date: '14-Jan-08',
        close: '178.78',
    },
    {
        date: '15-Jan-08',
        close: '169.04',
    },
    {
        date: '16-Jan-08',
        close: '159.64',
    },
    {
        date: '17-Jan-08',
        close: '160.89',
    },
    {
        date: '18-Jan-08',
        close: '161.36',
    },
    {
        date: '22-Jan-08',
        close: '155.64',
    },
    {
        date: '23-Jan-08',
        close: '139.07',
    },
    {
        date: '24-Jan-08',
        close: '135.60',
    },
    {
        date: '25-Jan-08',
        close: '130.01',
    },
    {
        date: '28-Jan-08',
        close: '130.01',
    },
    {
        date: '29-Jan-08',
        close: '131.54',
    },
    {
        date: '30-Jan-08',
        close: '132.18',
    },
    {
        date: '31-Jan-08',
        close: '135.36',
    },
    {
        date: '1-Feb-08',
        close: '133.75',
    },
    {
        date: '4-Feb-08',
        close: '131.65',
    },
    {
        date: '5-Feb-08',
        close: '129.36',
    },
    {
        date: '6-Feb-08',
        close: '122.00',
    },
    {
        date: '7-Feb-08',
        close: '121.24',
    },
    {
        date: '8-Feb-08',
        close: '125.48',
    },
    {
        date: '11-Feb-08',
        close: '129.45',
    },
    {
        date: '12-Feb-08',
        close: '124.86',
    },
    {
        date: '13-Feb-08',
        close: '129.40',
    },
    {
        date: '14-Feb-08',
        close: '127.46',
    },
    {
        date: '15-Feb-08',
        close: '124.63',
    },
    {
        date: '19-Feb-08',
        close: '122.18',
    },
    {
        date: '20-Feb-08',
        close: '123.82',
    },
    {
        date: '21-Feb-08',
        close: '121.54',
    },
    {
        date: '22-Feb-08',
        close: '119.46',
    },
    {
        date: '25-Feb-08',
        close: '119.74',
    },
    {
        date: '26-Feb-08',
        close: '119.15',
    },
    {
        date: '27-Feb-08',
        close: '122.96',
    },
    {
        date: '28-Feb-08',
        close: '129.91',
    },
    {
        date: '29-Feb-08',
        close: '125.02',
    },
    {
        date: '3-Mar-08',
        close: '121.73',
    },
    {
        date: '4-Mar-08',
        close: '124.62',
    },
    {
        date: '5-Mar-08',
        close: '124.49',
    },
    {
        date: '6-Mar-08',
        close: '120.93',
    },
    {
        date: '7-Mar-08',
        close: '122.25',
    },
    {
        date: '10-Mar-08',
        close: '119.69',
    },
    {
        date: '11-Mar-08',
        close: '127.35',
    },
    {
        date: '12-Mar-08',
        close: '126.03',
    },
    {
        date: '13-Mar-08',
        close: '127.94',
    },
    {
        date: '14-Mar-08',
        close: '126.61',
    },
    {
        date: '17-Mar-08',
        close: '126.73',
    },
    {
        date: '18-Mar-08',
        close: '132.82',
    },
    {
        date: '19-Mar-08',
        close: '129.67',
    },
    {
        date: '20-Mar-08',
        close: '133.27',
    },
    {
        date: '24-Mar-08',
        close: '139.53',
    },
    {
        date: '25-Mar-08',
        close: '140.98',
    },
    {
        date: '26-Mar-08',
        close: '145.06',
    },
    {
        date: '27-Mar-08',
        close: '140.25',
    },
    {
        date: '28-Mar-08',
        close: '143.01',
    },
    {
        date: '31-Mar-08',
        close: '143.50',
    },
    {
        date: '1-Apr-08',
        close: '149.53',
    },
    {
        date: '2-Apr-08',
        close: '147.49',
    },
    {
        date: '3-Apr-08',
        close: '151.61',
    },
    {
        date: '4-Apr-08',
        close: '153.08',
    },
    {
        date: '7-Apr-08',
        close: '155.89',
    },
    {
        date: '8-Apr-08',
        close: '152.84',
    },
    {
        date: '9-Apr-08',
        close: '151.44',
    },
    {
        date: '10-Apr-08',
        close: '154.55',
    },
    {
        date: '11-Apr-08',
        close: '147.14',
    },
    {
        date: '14-Apr-08',
        close: '147.78',
    },
    {
        date: '15-Apr-08',
        close: '148.38',
    },
    {
        date: '16-Apr-08',
        close: '153.70',
    },
    {
        date: '17-Apr-08',
        close: '154.49',
    },
    {
        date: '18-Apr-08',
        close: '161.04',
    },
    {
        date: '21-Apr-08',
        close: '168.16',
    },
    {
        date: '22-Apr-08',
        close: '160.20',
    },
    {
        date: '23-Apr-08',
        close: '162.89',
    },
    {
        date: '24-Apr-08',
        close: '168.94',
    },
    {
        date: '25-Apr-08',
        close: '169.73',
    },
    {
        date: '28-Apr-08',
        close: '172.24',
    },
    {
        date: '29-Apr-08',
        close: '175.05',
    },
    {
        date: '30-Apr-08',
        close: '173.95',
    },
    {
        date: '1-May-08',
        close: '180.00',
    },
    {
        date: '2-May-08',
        close: '180.94',
    },
    {
        date: '5-May-08',
        close: '184.73',
    },
    {
        date: '6-May-08',
        close: '186.66',
    },
    {
        date: '7-May-08',
        close: '182.59',
    },
    {
        date: '8-May-08',
        close: '185.06',
    },
    {
        date: '9-May-08',
        close: '183.45',
    },
    {
        date: '12-May-08',
        close: '188.16',
    },
    {
        date: '13-May-08',
        close: '189.96',
    },
    {
        date: '14-May-08',
        close: '186.26',
    },
    {
        date: '15-May-08',
        close: '189.73',
    },
    {
        date: '16-May-08',
        close: '187.62',
    },
    {
        date: '19-May-08',
        close: '183.60',
    },
    {
        date: '20-May-08',
        close: '185.90',
    },
    {
        date: '21-May-08',
        close: '178.19',
    },
    {
        date: '22-May-08',
        close: '177.05',
    },
    {
        date: '23-May-08',
        close: '181.17',
    },
    {
        date: '27-May-08',
        close: '186.43',
    },
    {
        date: '28-May-08',
        close: '187.01',
    },
    {
        date: '29-May-08',
        close: '186.69',
    },
    {
        date: '30-May-08',
        close: '188.75',
    },
    {
        date: '2-Jun-08',
        close: '186.10',
    },
    {
        date: '3-Jun-08',
        close: '185.37',
    },
    {
        date: '4-Jun-08',
        close: '185.19',
    },
    {
        date: '5-Jun-08',
        close: '189.43',
    },
    {
        date: '6-Jun-08',
        close: '185.64',
    },
    {
        date: '9-Jun-08',
        close: '181.61',
    },
    {
        date: '10-Jun-08',
        close: '185.64',
    },
    {
        date: '11-Jun-08',
        close: '180.81',
    },
    {
        date: '12-Jun-08',
        close: '173.26',
    },
    {
        date: '13-Jun-08',
        close: '172.37',
    },
    {
        date: '16-Jun-08',
        close: '176.84',
    },
    {
        date: '17-Jun-08',
        close: '181.43',
    },
    {
        date: '18-Jun-08',
        close: '178.75',
    },
    {
        date: '19-Jun-08',
        close: '180.90',
    },
    {
        date: '20-Jun-08',
        close: '175.27',
    },
    {
        date: '23-Jun-08',
        close: '173.16',
    },
    {
        date: '24-Jun-08',
        close: '173.25',
    },
    {
        date: '25-Jun-08',
        close: '177.39',
    },
    {
        date: '26-Jun-08',
        close: '168.26',
    },
    {
        date: '27-Jun-08',
        close: '170.09',
    },
    {
        date: '30-Jun-08',
        close: '167.44',
    },
    {
        date: '1-Jul-08',
        close: '174.68',
    },
    {
        date: '2-Jul-08',
        close: '168.18',
    },
    {
        date: '3-Jul-08',
        close: '170.12',
    },
    {
        date: '7-Jul-08',
        close: '175.16',
    },
    {
        date: '8-Jul-08',
        close: '179.55',
    },
    {
        date: '9-Jul-08',
        close: '174.25',
    },
    {
        date: '10-Jul-08',
        close: '176.63',
    },
    {
        date: '11-Jul-08',
        close: '172.58',
    },
    {
        date: '14-Jul-08',
        close: '173.88',
    },
    {
        date: '15-Jul-08',
        close: '169.64',
    },
    {
        date: '16-Jul-08',
        close: '172.81',
    },
    {
        date: '17-Jul-08',
        close: '171.81',
    },
    {
        date: '18-Jul-08',
        close: '165.15',
    },
    {
        date: '21-Jul-08',
        close: '166.29',
    },
    {
        date: '22-Jul-08',
        close: '162.02',
    },
    {
        date: '23-Jul-08',
        close: '166.26',
    },
    {
        date: '24-Jul-08',
        close: '159.03',
    },
    {
        date: '25-Jul-08',
        close: '162.12',
    },
    {
        date: '28-Jul-08',
        close: '154.40',
    },
    {
        date: '29-Jul-08',
        close: '157.08',
    },
    {
        date: '30-Jul-08',
        close: '159.88',
    },
    {
        date: '31-Jul-08',
        close: '158.95',
    },
    {
        date: '1-Aug-08',
        close: '156.66',
    },
    {
        date: '4-Aug-08',
        close: '153.23',
    },
    {
        date: '5-Aug-08',
        close: '160.64',
    },
    {
        date: '6-Aug-08',
        close: '164.19',
    },
    {
        date: '7-Aug-08',
        close: '163.57',
    },
    {
        date: '8-Aug-08',
        close: '169.55',
    },
    {
        date: '11-Aug-08',
        close: '173.56',
    },
    {
        date: '12-Aug-08',
        close: '176.73',
    },
    {
        date: '13-Aug-08',
        close: '179.30',
    },
    {
        date: '14-Aug-08',
        close: '179.32',
    },
    {
        date: '15-Aug-08',
        close: '175.74',
    },
    {
        date: '18-Aug-08',
        close: '175.39',
    },
    {
        date: '19-Aug-08',
        close: '173.53',
    },
    {
        date: '20-Aug-08',
        close: '175.84',
    },
    {
        date: '21-Aug-08',
        close: '174.29',
    },
    {
        date: '22-Aug-08',
        close: '176.79',
    },
    {
        date: '25-Aug-08',
        close: '172.55',
    },
    {
        date: '26-Aug-08',
        close: '173.64',
    },
    {
        date: '27-Aug-08',
        close: '174.67',
    },
    {
        date: '28-Aug-08',
        close: '173.74',
    },
    {
        date: '29-Aug-08',
        close: '169.53',
    },
    {
        date: '2-Sep-08',
        close: '166.19',
    },
    {
        date: '3-Sep-08',
        close: '166.96',
    },
    {
        date: '4-Sep-08',
        close: '161.22',
    },
    {
        date: '5-Sep-08',
        close: '160.18',
    },
    {
        date: '8-Sep-08',
        close: '157.92',
    },
    {
        date: '9-Sep-08',
        close: '151.68',
    },
    {
        date: '10-Sep-08',
        close: '151.61',
    },
    {
        date: '11-Sep-08',
        close: '152.65',
    },
    {
        date: '12-Sep-08',
        close: '148.94',
    },
    {
        date: '15-Sep-08',
        close: '140.36',
    },
    {
        date: '16-Sep-08',
        close: '139.88',
    },
    {
        date: '17-Sep-08',
        close: '127.83',
    },
    {
        date: '18-Sep-08',
        close: '134.09',
    },
    {
        date: '19-Sep-08',
        close: '140.91',
    },
    {
        date: '22-Sep-08',
        close: '131.05',
    },
    {
        date: '23-Sep-08',
        close: '126.84',
    },
    {
        date: '24-Sep-08',
        close: '128.71',
    },
    {
        date: '25-Sep-08',
        close: '131.93',
    },
    {
        date: '26-Sep-08',
        close: '128.24',
    },
    {
        date: '29-Sep-08',
        close: '105.26',
    },
    {
        date: '30-Sep-08',
        close: '113.66',
    },
    {
        date: '1-Oct-08',
        close: '109.12',
    },
    {
        date: '2-Oct-08',
        close: '100.10',
    },
    {
        date: '3-Oct-08',
        close: '97.07',
    },
    {
        date: '6-Oct-08',
        close: '98.14',
    },
    {
        date: '7-Oct-08',
        close: '89.16',
    },
    {
        date: '8-Oct-08',
        close: '89.79',
    },
    {
        date: '9-Oct-08',
        close: '88.74',
    },
    {
        date: '10-Oct-08',
        close: '96.80',
    },
    {
        date: '13-Oct-08',
        close: '110.26',
    },
    {
        date: '14-Oct-08',
        close: '104.08',
    },
    {
        date: '15-Oct-08',
        close: '97.95',
    },
    {
        date: '16-Oct-08',
        close: '101.89',
    },
    {
        date: '17-Oct-08',
        close: '97.40',
    },
    {
        date: '20-Oct-08',
        close: '98.44',
    },
    {
        date: '21-Oct-08',
        close: '91.49',
    },
    {
        date: '22-Oct-08',
        close: '96.87',
    },
    {
        date: '23-Oct-08',
        close: '98.23',
    },
    {
        date: '24-Oct-08',
        close: '96.38',
    },
    {
        date: '27-Oct-08',
        close: '92.09',
    },
    {
        date: '28-Oct-08',
        close: '99.91',
    },
    {
        date: '29-Oct-08',
        close: '104.55',
    },
    {
        date: '30-Oct-08',
        close: '111.04',
    },
    {
        date: '31-Oct-08',
        close: '107.59',
    },
    {
        date: '3-Nov-08',
        close: '106.96',
    },
    {
        date: '4-Nov-08',
        close: '110.99',
    },
    {
        date: '5-Nov-08',
        close: '103.30',
    },
    {
        date: '6-Nov-08',
        close: '99.10',
    },
    {
        date: '7-Nov-08',
        close: '98.24',
    },
    {
        date: '10-Nov-08',
        close: '95.88',
    },
    {
        date: '11-Nov-08',
        close: '94.77',
    },
    {
        date: '12-Nov-08',
        close: '90.12',
    },
    {
        date: '13-Nov-08',
        close: '96.44',
    },
    {
        date: '14-Nov-08',
        close: '90.24',
    },
    {
        date: '17-Nov-08',
        close: '88.14',
    },
    {
        date: '18-Nov-08',
        close: '89.91',
    },
    {
        date: '19-Nov-08',
        close: '86.29',
    },
    {
        date: '20-Nov-08',
        close: '80.49',
    },
    {
        date: '21-Nov-08',
        close: '82.58',
    },
    {
        date: '24-Nov-08',
        close: '92.95',
    },
    {
        date: '25-Nov-08',
        close: '90.80',
    },
    {
        date: '26-Nov-08',
        close: '95.00',
    },
    {
        date: '27-Nov-08',
        close: '95.00',
    },
    {
        date: '28-Nov-08',
        close: '92.67',
    },
    {
        date: '1-Dec-08',
        close: '88.93',
    },
    {
        date: '2-Dec-08',
        close: '92.47',
    },
    {
        date: '3-Dec-08',
        close: '95.90',
    },
    {
        date: '4-Dec-08',
        close: '91.41',
    },
    {
        date: '5-Dec-08',
        close: '94.00',
    },
    {
        date: '8-Dec-08',
        close: '99.72',
    },
    {
        date: '9-Dec-08',
        close: '100.06',
    },
    {
        date: '10-Dec-08',
        close: '98.21',
    },
    {
        date: '11-Dec-08',
        close: '95.00',
    },
    {
        date: '12-Dec-08',
        close: '98.27',
    },
    {
        date: '15-Dec-08',
        close: '94.75',
    },
    {
        date: '16-Dec-08',
        close: '95.43',
    },
    {
        date: '17-Dec-08',
        close: '89.16',
    },
    {
        date: '18-Dec-08',
        close: '89.43',
    },
    {
        date: '19-Dec-08',
        close: '90.00',
    },
    {
        date: '22-Dec-08',
        close: '85.74',
    },
    {
        date: '23-Dec-08',
        close: '86.38',
    },
    {
        date: '24-Dec-08',
        close: '85.04',
    },
    {
        date: '25-Dec-08',
        close: '85.04',
    },
    {
        date: '26-Dec-08',
        close: '85.81',
    },
    {
        date: '29-Dec-08',
        close: '86.61',
    },
    {
        date: '30-Dec-08',
        close: '86.29',
    },
    {
        date: '31-Dec-08',
        close: '85.35',
    },
    {
        date: '1-Jan-09',
        close: '85.35',
    },
    {
        date: '2-Jan-09',
        close: '90.75',
    },
    {
        date: '5-Jan-09',
        close: '94.58',
    },
    {
        date: '6-Jan-09',
        close: '93.02',
    },
    {
        date: '7-Jan-09',
        close: '91.01',
    },
    {
        date: '8-Jan-09',
        close: '92.70',
    },
    {
        date: '9-Jan-09',
        close: '90.58',
    },
    {
        date: '12-Jan-09',
        close: '88.66',
    },
    {
        date: '13-Jan-09',
        close: '87.71',
    },
    {
        date: '14-Jan-09',
        close: '85.33',
    },
    {
        date: '15-Jan-09',
        close: '83.38',
    },
    {
        date: '16-Jan-09',
        close: '82.33',
    },
    {
        date: '20-Jan-09',
        close: '78.20',
    },
    {
        date: '21-Jan-09',
        close: '82.83',
    },
    {
        date: '22-Jan-09',
        close: '88.36',
    },
    {
        date: '23-Jan-09',
        close: '88.36',
    },
    {
        date: '26-Jan-09',
        close: '89.64',
    },
    {
        date: '27-Jan-09',
        close: '90.73',
    },
    {
        date: '28-Jan-09',
        close: '94.20',
    },
    {
        date: '29-Jan-09',
        close: '93.00',
    },
    {
        date: '30-Jan-09',
        close: '90.13',
    },
    {
        date: '2-Feb-09',
        close: '91.51',
    },
    {
        date: '3-Feb-09',
        close: '92.98',
    },
    {
        date: '4-Feb-09',
        close: '93.55',
    },
    {
        date: '5-Feb-09',
        close: '96.46',
    },
    {
        date: '6-Feb-09',
        close: '99.72',
    },
    {
        date: '9-Feb-09',
        close: '102.51',
    },
    {
        date: '10-Feb-09',
        close: '97.83',
    },
    {
        date: '11-Feb-09',
        close: '96.82',
    },
    {
        date: '12-Feb-09',
        close: '99.27',
    },
    {
        date: '13-Feb-09',
        close: '99.16',
    },
    {
        date: '17-Feb-09',
        close: '94.53',
    },
    {
        date: '18-Feb-09',
        close: '94.37',
    },
    {
        date: '19-Feb-09',
        close: '90.64',
    },
    {
        date: '20-Feb-09',
        close: '91.20',
    },
    {
        date: '23-Feb-09',
        close: '86.95',
    },
    {
        date: '24-Feb-09',
        close: '90.25',
    },
    {
        date: '25-Feb-09',
        close: '91.16',
    },
    {
        date: '26-Feb-09',
        close: '89.19',
    },
    {
        date: '27-Feb-09',
        close: '89.31',
    },
    {
        date: '2-Mar-09',
        close: '87.94',
    },
    {
        date: '3-Mar-09',
        close: '88.37',
    },
    {
        date: '4-Mar-09',
        close: '91.17',
    },
    {
        date: '5-Mar-09',
        close: '88.84',
    },
    {
        date: '6-Mar-09',
        close: '85.30',
    },
    {
        date: '9-Mar-09',
        close: '83.11',
    },
    {
        date: '10-Mar-09',
        close: '88.63',
    },
    {
        date: '11-Mar-09',
        close: '92.68',
    },
    {
        date: '12-Mar-09',
        close: '96.35',
    },
    {
        date: '13-Mar-09',
        close: '95.93',
    },
    {
        date: '16-Mar-09',
        close: '95.42',
    },
    {
        date: '17-Mar-09',
        close: '99.66',
    },
    {
        date: '18-Mar-09',
        close: '101.52',
    },
    {
        date: '19-Mar-09',
        close: '101.62',
    },
    {
        date: '20-Mar-09',
        close: '101.59',
    },
    {
        date: '23-Mar-09',
        close: '107.66',
    },
    {
        date: '24-Mar-09',
        close: '106.50',
    },
    {
        date: '25-Mar-09',
        close: '106.49',
    },
    {
        date: '26-Mar-09',
        close: '109.87',
    },
    {
        date: '27-Mar-09',
        close: '106.85',
    },
    {
        date: '30-Mar-09',
        close: '104.49',
    },
    {
        date: '31-Mar-09',
        close: '105.12',
    },
    {
        date: '1-Apr-09',
        close: '108.69',
    },
    {
        date: '2-Apr-09',
        close: '112.71',
    },
    {
        date: '3-Apr-09',
        close: '115.99',
    },
    {
        date: '6-Apr-09',
        close: '118.45',
    },
    {
        date: '7-Apr-09',
        close: '115.00',
    },
    {
        date: '8-Apr-09',
        close: '116.32',
    },
    {
        date: '9-Apr-09',
        close: '119.57',
    },
    {
        date: '10-Apr-09',
        close: '119.57',
    },
    {
        date: '13-Apr-09',
        close: '120.22',
    },
    {
        date: '14-Apr-09',
        close: '118.31',
    },
    {
        date: '15-Apr-09',
        close: '117.64',
    },
    {
        date: '16-Apr-09',
        close: '121.45',
    },
    {
        date: '17-Apr-09',
        close: '123.42',
    },
    {
        date: '20-Apr-09',
        close: '120.50',
    },
    {
        date: '21-Apr-09',
        close: '121.76',
    },
    {
        date: '22-Apr-09',
        close: '121.51',
    },
    {
        date: '23-Apr-09',
        close: '125.40',
    },
    {
        date: '24-Apr-09',
        close: '123.90',
    },
    {
        date: '27-Apr-09',
        close: '124.73',
    },
    {
        date: '28-Apr-09',
        close: '123.90',
    },
    {
        date: '29-Apr-09',
        close: '125.14',
    },
    {
        date: '30-Apr-09',
        close: '125.83',
    },
    {
        date: '1-May-09',
        close: '127.24',
    },
    {
        date: '4-May-09',
        close: '132.07',
    },
    {
        date: '5-May-09',
        close: '132.71',
    },
    {
        date: '6-May-09',
        close: '132.50',
    },
    {
        date: '7-May-09',
        close: '129.06',
    },
    {
        date: '8-May-09',
        close: '129.19',
    },
    {
        date: '11-May-09',
        close: '129.57',
    },
    {
        date: '12-May-09',
        close: '124.42',
    },
    {
        date: '13-May-09',
        close: '119.49',
    },
    {
        date: '14-May-09',
        close: '122.95',
    },
    {
        date: '15-May-09',
        close: '122.42',
    },
    {
        date: '18-May-09',
        close: '126.65',
    },
    {
        date: '19-May-09',
        close: '127.45',
    },
    {
        date: '20-May-09',
        close: '125.87',
    },
    {
        date: '21-May-09',
        close: '124.18',
    },
    {
        date: '22-May-09',
        close: '122.50',
    },
    {
        date: '26-May-09',
        close: '130.78',
    },
    {
        date: '27-May-09',
        close: '133.05',
    },
    {
        date: '28-May-09',
        close: '135.07',
    },
    {
        date: '29-May-09',
        close: '135.81',
    },
    {
        date: '1-Jun-09',
        close: '139.35',
    },
    {
        date: '2-Jun-09',
        close: '139.49',
    },
    {
        date: '3-Jun-09',
        close: '140.95',
    },
    {
        date: '4-Jun-09',
        close: '143.74',
    },
    {
        date: '5-Jun-09',
        close: '144.67',
    },
    {
        date: '8-Jun-09',
        close: '143.85',
    },
    {
        date: '9-Jun-09',
        close: '142.72',
    },
    {
        date: '10-Jun-09',
        close: '140.25',
    },
    {
        date: '11-Jun-09',
        close: '139.95',
    },
    {
        date: '12-Jun-09',
        close: '136.97',
    },
    {
        date: '15-Jun-09',
        close: '136.09',
    },
    {
        date: '16-Jun-09',
        close: '136.35',
    },
    {
        date: '17-Jun-09',
        close: '135.58',
    },
    {
        date: '18-Jun-09',
        close: '135.88',
    },
    {
        date: '19-Jun-09',
        close: '139.48',
    },
    {
        date: '22-Jun-09',
        close: '137.37',
    },
    {
        date: '23-Jun-09',
        close: '134.01',
    },
    {
        date: '24-Jun-09',
        close: '136.22',
    },
    {
        date: '25-Jun-09',
        close: '139.86',
    },
    {
        date: '26-Jun-09',
        close: '142.44',
    },
    {
        date: '29-Jun-09',
        close: '141.97',
    },
    {
        date: '30-Jun-09',
        close: '142.43',
    },
    {
        date: '1-Jul-09',
        close: '142.83',
    },
    {
        date: '2-Jul-09',
        close: '140.02',
    },
    {
        date: '3-Jul-09',
        close: '140.02',
    },
    {
        date: '6-Jul-09',
        close: '138.61',
    },
    {
        date: '7-Jul-09',
        close: '135.40',
    },
    {
        date: '8-Jul-09',
        close: '137.22',
    },
    {
        date: '9-Jul-09',
        close: '136.36',
    },
    {
        date: '10-Jul-09',
        close: '138.52',
    },
    {
        date: '13-Jul-09',
        close: '142.34',
    },
    {
        date: '14-Jul-09',
        close: '142.27',
    },
    {
        date: '15-Jul-09',
        close: '146.88',
    },
    {
        date: '16-Jul-09',
        close: '147.52',
    },
    {
        date: '17-Jul-09',
        close: '151.75',
    },
    {
        date: '20-Jul-09',
        close: '152.91',
    },
    {
        date: '21-Jul-09',
        close: '151.51',
    },
    {
        date: '22-Jul-09',
        close: '156.74',
    },
    {
        date: '23-Jul-09',
        close: '157.82',
    },
    {
        date: '24-Jul-09',
        close: '159.99',
    },
    {
        date: '27-Jul-09',
        close: '160.10',
    },
    {
        date: '28-Jul-09',
        close: '160.00',
    },
    {
        date: '29-Jul-09',
        close: '160.03',
    },
    {
        date: '30-Jul-09',
        close: '162.79',
    },
    {
        date: '31-Jul-09',
        close: '163.39',
    },
    {
        date: '3-Aug-09',
        close: '166.43',
    },
    {
        date: '4-Aug-09',
        close: '165.55',
    },
    {
        date: '5-Aug-09',
        close: '165.11',
    },
    {
        date: '6-Aug-09',
        close: '163.91',
    },
    {
        date: '7-Aug-09',
        close: '165.51',
    },
    {
        date: '10-Aug-09',
        close: '164.72',
    },
    {
        date: '12-Aug-09',
        close: '165.31',
    },
    {
        date: '13-Aug-09',
        close: '168.42',
    },
    {
        date: '14-Aug-09',
        close: '166.78',
    },
    {
        date: '17-Aug-09',
        close: '159.59',
    },
    {
        date: '18-Aug-09',
        close: '164.00',
    },
    {
        date: '19-Aug-09',
        close: '164.60',
    },
    {
        date: '20-Aug-09',
        close: '166.33',
    },
    {
        date: '21-Aug-09',
        close: '169.22',
    },
    {
        date: '24-Aug-09',
        close: '169.06',
    },
    {
        date: '25-Aug-09',
        close: '169.40',
    },
    {
        date: '26-Aug-09',
        close: '167.41',
    },
    {
        date: '27-Aug-09',
        close: '169.45',
    },
    {
        date: '28-Aug-09',
        close: '170.05',
    },
    {
        date: '31-Aug-09',
        close: '168.21',
    },
    {
        date: '1-Sep-09',
        close: '165.30',
    },
    {
        date: '2-Sep-09',
        close: '165.18',
    },
    {
        date: '3-Sep-09',
        close: '166.55',
    },
    {
        date: '4-Sep-09',
        close: '170.31',
    },
    {
        date: '8-Sep-09',
        close: '172.93',
    },
    {
        date: '9-Sep-09',
        close: '171.14',
    },
    {
        date: '10-Sep-09',
        close: '172.56',
    },
    {
        date: '11-Sep-09',
        close: '172.16',
    },
    {
        date: '14-Sep-09',
        close: '173.72',
    },
    {
        date: '15-Sep-09',
        close: '175.16',
    },
    {
        date: '16-Sep-09',
        close: '181.87',
    },
    {
        date: '17-Sep-09',
        close: '184.55',
    },
    {
        date: '18-Sep-09',
        close: '185.02',
    },
    {
        date: '21-Sep-09',
        close: '184.02',
    },
    {
        date: '22-Sep-09',
        close: '184.48',
    },
    {
        date: '23-Sep-09',
        close: '185.50',
    },
    {
        date: '24-Sep-09',
        close: '183.82',
    },
    {
        date: '25-Sep-09',
        close: '182.37',
    },
    {
        date: '28-Sep-09',
        close: '186.15',
    },
    {
        date: '29-Sep-09',
        close: '185.38',
    },
    {
        date: '30-Sep-09',
        close: '185.35',
    },
    {
        date: '1-Oct-09',
        close: '180.86',
    },
    {
        date: '2-Oct-09',
        close: '184.90',
    },
    {
        date: '5-Oct-09',
        close: '186.02',
    },
    {
        date: '6-Oct-09',
        close: '190.01',
    },
    {
        date: '7-Oct-09',
        close: '190.25',
    },
    {
        date: '8-Oct-09',
        close: '189.27',
    },
    {
        date: '9-Oct-09',
        close: '190.47',
    },
    {
        date: '12-Oct-09',
        close: '190.81',
    },
    {
        date: '13-Oct-09',
        close: '190.02',
    },
    {
        date: '14-Oct-09',
        close: '191.29',
    },
    {
        date: '15-Oct-09',
        close: '190.56',
    },
    {
        date: '16-Oct-09',
        close: '188.05',
    },
    {
        date: '19-Oct-09',
        close: '189.86',
    },
    {
        date: '20-Oct-09',
        close: '198.76',
    },
    {
        date: '21-Oct-09',
        close: '204.92',
    },
    {
        date: '22-Oct-09',
        close: '205.20',
    },
    {
        date: '23-Oct-09',
        close: '203.94',
    },
    {
        date: '26-Oct-09',
        close: '202.48',
    },
    {
        date: '27-Oct-09',
        close: '197.37',
    },
    {
        date: '28-Oct-09',
        close: '192.40',
    },
    {
        date: '29-Oct-09',
        close: '196.35',
    },
    {
        date: '30-Oct-09',
        close: '188.50',
    },
    {
        date: '2-Nov-09',
        close: '189.31',
    },
    {
        date: '3-Nov-09',
        close: '188.75',
    },
    {
        date: '4-Nov-09',
        close: '190.81',
    },
    {
        date: '5-Nov-09',
        close: '194.03',
    },
    {
        date: '6-Nov-09',
        close: '194.34',
    },
    {
        date: '9-Nov-09',
        close: '201.46',
    },
    {
        date: '10-Nov-09',
        close: '202.98',
    },
    {
        date: '11-Nov-09',
        close: '203.25',
    },
    {
        date: '12-Nov-09',
        close: '201.99',
    },
    {
        date: '13-Nov-09',
        close: '204.45',
    },
    {
        date: '16-Nov-09',
        close: '206.63',
    },
    {
        date: '17-Nov-09',
        close: '207.00',
    },
    {
        date: '18-Nov-09',
        close: '205.96',
    },
    {
        date: '19-Nov-09',
        close: '200.51',
    },
    {
        date: '20-Nov-09',
        close: '199.92',
    },
    {
        date: '23-Nov-09',
        close: '205.88',
    },
    {
        date: '24-Nov-09',
        close: '204.44',
    },
    {
        date: '25-Nov-09',
        close: '204.19',
    },
    {
        date: '26-Nov-09',
        close: '204.19',
    },
    {
        date: '27-Nov-09',
        close: '200.59',
    },
    {
        date: '30-Nov-09',
        close: '199.91',
    },
    {
        date: '1-Dec-09',
        close: '196.97',
    },
    {
        date: '2-Dec-09',
        close: '196.23',
    },
    {
        date: '3-Dec-09',
        close: '196.48',
    },
    {
        date: '4-Dec-09',
        close: '193.32',
    },
    {
        date: '7-Dec-09',
        close: '188.95',
    },
    {
        date: '8-Dec-09',
        close: '189.87',
    },
    {
        date: '9-Dec-09',
        close: '197.80',
    },
    {
        date: '10-Dec-09',
        close: '196.43',
    },
    {
        date: '11-Dec-09',
        close: '194.67',
    },
    {
        date: '14-Dec-09',
        close: '196.98',
    },
    {
        date: '15-Dec-09',
        close: '194.17',
    },
    {
        date: '16-Dec-09',
        close: '195.03',
    },
    {
        date: '17-Dec-09',
        close: '191.86',
    },
    {
        date: '18-Dec-09',
        close: '195.43',
    },
    {
        date: '21-Dec-09',
        close: '198.23',
    },
    {
        date: '22-Dec-09',
        close: '200.36',
    },
    {
        date: '23-Dec-09',
        close: '202.10',
    },
    {
        date: '24-Dec-09',
        close: '209.04',
    },
    {
        date: '25-Dec-09',
        close: '209.04',
    },
    {
        date: '28-Dec-09',
        close: '211.61',
    },
    {
        date: '29-Dec-09',
        close: '209.10',
    },
    {
        date: '30-Dec-09',
        close: '211.64',
    },
    {
        date: '31-Dec-09',
        close: '210.73',
    },
    {
        date: '1-Jan-10',
        close: '210.73',
    },
    {
        date: '4-Jan-10',
        close: '214.01',
    },
    {
        date: '5-Jan-10',
        close: '214.38',
    },
    {
        date: '6-Jan-10',
        close: '210.97',
    },
    {
        date: '7-Jan-10',
        close: '210.58',
    },
    {
        date: '8-Jan-10',
        close: '211.98',
    },
    {
        date: '11-Jan-10',
        close: '210.11',
    },
    {
        date: '12-Jan-10',
        close: '207.72',
    },
    {
        date: '13-Jan-10',
        close: '210.65',
    },
    {
        date: '14-Jan-10',
        close: '209.43',
    },
    {
        date: '15-Jan-10',
        close: '205.93',
    },
    {
        date: '18-Jan-10',
        close: '205.93',
    },
    {
        date: '19-Jan-10',
        close: '215.04',
    },
    {
        date: '20-Jan-10',
        close: '211.72',
    },
    {
        date: '21-Jan-10',
        close: '208.07',
    },
    {
        date: '22-Jan-10',
        close: '197.75',
    },
    {
        date: '25-Jan-10',
        close: '203.08',
    },
    {
        date: '26-Jan-10',
        close: '205.94',
    },
    {
        date: '27-Jan-10',
        close: '207.88',
    },
    {
        date: '28-Jan-10',
        close: '199.29',
    },
    {
        date: '29-Jan-10',
        close: '192.06',
    },
    {
        date: '1-Feb-10',
        close: '194.73',
    },
    {
        date: '2-Feb-10',
        close: '195.86',
    },
    {
        date: '3-Feb-10',
        close: '199.23',
    },
    {
        date: '4-Feb-10',
        close: '192.05',
    },
    {
        date: '5-Feb-10',
        close: '195.46',
    },
    {
        date: '8-Feb-10',
        close: '194.12',
    },
    {
        date: '9-Feb-10',
        close: '196.19',
    },
    {
        date: '10-Feb-10',
        close: '195.12',
    },
    {
        date: '11-Feb-10',
        close: '198.67',
    },
    {
        date: '12-Feb-10',
        close: '200.38',
    },
    {
        date: '15-Feb-10',
        close: '200.38',
    },
    {
        date: '16-Feb-10',
        close: '203.40',
    },
    {
        date: '17-Feb-10',
        close: '202.55',
    },
    {
        date: '18-Feb-10',
        close: '202.93',
    },
    {
        date: '19-Feb-10',
        close: '201.67',
    },
    {
        date: '22-Feb-10',
        close: '200.42',
    },
    {
        date: '23-Feb-10',
        close: '197.06',
    },
    {
        date: '24-Feb-10',
        close: '200.66',
    },
    {
        date: '25-Feb-10',
        close: '202.00',
    },
    {
        date: '26-Feb-10',
        close: '204.62',
    },
    {
        date: '1-Mar-10',
        close: '208.99',
    },
    {
        date: '2-Mar-10',
        close: '208.85',
    },
    {
        date: '3-Mar-10',
        close: '209.33',
    },
    {
        date: '4-Mar-10',
        close: '210.71',
    },
    {
        date: '5-Mar-10',
        close: '218.95',
    },
    {
        date: '8-Mar-10',
        close: '219.08',
    },
    {
        date: '9-Mar-10',
        close: '223.02',
    },
    {
        date: '10-Mar-10',
        close: '224.84',
    },
    {
        date: '11-Mar-10',
        close: '225.50',
    },
    {
        date: '12-Mar-10',
        close: '226.60',
    },
    {
        date: '15-Mar-10',
        close: '223.84',
    },
    {
        date: '16-Mar-10',
        close: '224.45',
    },
    {
        date: '17-Mar-10',
        close: '224.12',
    },
    {
        date: '18-Mar-10',
        close: '224.65',
    },
    {
        date: '19-Mar-10',
        close: '222.25',
    },
    {
        date: '22-Mar-10',
        close: '224.75',
    },
    {
        date: '23-Mar-10',
        close: '228.36',
    },
    {
        date: '24-Mar-10',
        close: '229.37',
    },
    {
        date: '25-Mar-10',
        close: '226.65',
    },
    {
        date: '26-Mar-10',
        close: '230.90',
    },
    {
        date: '29-Mar-10',
        close: '232.39',
    },
    {
        date: '30-Mar-10',
        close: '235.84',
    },
    {
        date: '31-Mar-10',
        close: '235.00',
    },
    {
        date: '1-Apr-10',
        close: '235.97',
    },
    {
        date: '2-Apr-10',
        close: '235.97',
    },
    {
        date: '5-Apr-10',
        close: '238.49',
    },
    {
        date: '6-Apr-10',
        close: '239.54',
    },
    {
        date: '7-Apr-10',
        close: '240.60',
    },
    {
        date: '8-Apr-10',
        close: '239.95',
    },
    {
        date: '9-Apr-10',
        close: '241.79',
    },
    {
        date: '12-Apr-10',
        close: '242.29',
    },
    {
        date: '13-Apr-10',
        close: '242.43',
    },
    {
        date: '14-Apr-10',
        close: '245.69',
    },
    {
        date: '15-Apr-10',
        close: '248.92',
    },
    {
        date: '16-Apr-10',
        close: '247.40',
    },
    {
        date: '19-Apr-10',
        close: '247.07',
    },
    {
        date: '20-Apr-10',
        close: '244.59',
    },
    {
        date: '21-Apr-10',
        close: '259.22',
    },
    {
        date: '22-Apr-10',
        close: '266.47',
    },
    {
        date: '23-Apr-10',
        close: '270.83',
    },
    {
        date: '26-Apr-10',
        close: '269.50',
    },
    {
        date: '27-Apr-10',
        close: '262.04',
    },
    {
        date: '28-Apr-10',
        close: '261.60',
    },
    {
        date: '29-Apr-10',
        close: '268.64',
    },
    {
        date: '30-Apr-10',
        close: '261.09',
    },
    {
        date: '3-May-10',
        close: '266.35',
    },
    {
        date: '4-May-10',
        close: '258.68',
    },
    {
        date: '5-May-10',
        close: '255.98',
    },
    {
        date: '6-May-10',
        close: '246.25',
    },
    {
        date: '7-May-10',
        close: '235.86',
    },
    {
        date: '10-May-10',
        close: '253.99',
    },
    {
        date: '11-May-10',
        close: '256.52',
    },
    {
        date: '12-May-10',
        close: '262.09',
    },
    {
        date: '13-May-10',
        close: '258.36',
    },
    {
        date: '14-May-10',
        close: '253.82',
    },
    {
        date: '17-May-10',
        close: '254.22',
    },
    {
        date: '18-May-10',
        close: '252.36',
    },
    {
        date: '19-May-10',
        close: '248.34',
    },
    {
        date: '20-May-10',
        close: '237.76',
    },
    {
        date: '21-May-10',
        close: '242.32',
    },
    {
        date: '24-May-10',
        close: '246.76',
    },
    {
        date: '25-May-10',
        close: '245.22',
    },
    {
        date: '26-May-10',
        close: '244.11',
    },
    {
        date: '27-May-10',
        close: '253.35',
    },
    {
        date: '28-May-10',
        close: '256.88',
    },
    {
        date: '31-May-10',
        close: '256.88',
    },
    {
        date: '1-Jun-10',
        close: '260.83',
    },
    {
        date: '2-Jun-10',
        close: '263.95',
    },
    {
        date: '3-Jun-10',
        close: '263.12',
    },
    {
        date: '4-Jun-10',
        close: '255.96',
    },
    {
        date: '7-Jun-10',
        close: '250.94',
    },
    {
        date: '8-Jun-10',
        close: '249.33',
    },
    {
        date: '9-Jun-10',
        close: '243.20',
    },
    {
        date: '10-Jun-10',
        close: '250.51',
    },
    {
        date: '11-Jun-10',
        close: '253.51',
    },
    {
        date: '14-Jun-10',
        close: '254.28',
    },
    {
        date: '15-Jun-10',
        close: '259.69',
    },
    {
        date: '16-Jun-10',
        close: '267.25',
    },
    {
        date: '17-Jun-10',
        close: '271.87',
    },
    {
        date: '18-Jun-10',
        close: '274.07',
    },
    {
        date: '21-Jun-10',
        close: '270.17',
    },
    {
        date: '22-Jun-10',
        close: '273.85',
    },
    {
        date: '23-Jun-10',
        close: '270.97',
    },
    {
        date: '24-Jun-10',
        close: '269.00',
    },
    {
        date: '25-Jun-10',
        close: '266.70',
    },
    {
        date: '28-Jun-10',
        close: '268.30',
    },
    {
        date: '29-Jun-10',
        close: '256.17',
    },
    {
        date: '30-Jun-10',
        close: '251.53',
    },
    {
        date: '1-Jul-10',
        close: '248.48',
    },
    {
        date: '2-Jul-10',
        close: '246.94',
    },
    {
        date: '5-Jul-10',
        close: '246.94',
    },
    {
        date: '6-Jul-10',
        close: '248.63',
    },
    {
        date: '7-Jul-10',
        close: '258.66',
    },
    {
        date: '8-Jul-10',
        close: '258.09',
    },
    {
        date: '9-Jul-10',
        close: '259.62',
    },
    {
        date: '12-Jul-10',
        close: '257.28',
    },
    {
        date: '13-Jul-10',
        close: '251.80',
    },
    {
        date: '14-Jul-10',
        close: '252.73',
    },
    {
        date: '15-Jul-10',
        close: '251.45',
    },
    {
        date: '16-Jul-10',
        close: '249.90',
    },
    {
        date: '19-Jul-10',
        close: '245.58',
    },
    {
        date: '20-Jul-10',
        close: '251.89',
    },
    {
        date: '21-Jul-10',
        close: '254.24',
    },
    {
        date: '22-Jul-10',
        close: '259.02',
    },
    {
        date: '23-Jul-10',
        close: '259.94',
    },
    {
        date: '26-Jul-10',
        close: '259.28',
    },
    {
        date: '27-Jul-10',
        close: '264.08',
    },
    {
        date: '28-Jul-10',
        close: '260.96',
    },
    {
        date: '29-Jul-10',
        close: '258.11',
    },
    {
        date: '30-Jul-10',
        close: '257.25',
    },
    {
        date: '2-Aug-10',
        close: '261.85',
    },
    {
        date: '3-Aug-10',
        close: '261.93',
    },
    {
        date: '4-Aug-10',
        close: '262.98',
    },
    {
        date: '5-Aug-10',
        close: '261.70',
    },
    {
        date: '6-Aug-10',
        close: '260.09',
    },
    {
        date: '9-Aug-10',
        close: '261.75',
    },
    {
        date: '10-Aug-10',
        close: '259.41',
    },
    {
        date: '11-Aug-10',
        close: '250.19',
    },
    {
        date: '12-Aug-10',
        close: '251.79',
    },
    {
        date: '13-Aug-10',
        close: '249.10',
    },
    {
        date: '16-Aug-10',
        close: '247.64',
    },
    {
        date: '17-Aug-10',
        close: '251.97',
    },
    {
        date: '18-Aug-10',
        close: '253.07',
    },
    {
        date: '19-Aug-10',
        close: '249.88',
    },
    {
        date: '20-Aug-10',
        close: '249.64',
    },
    {
        date: '23-Aug-10',
        close: '245.80',
    },
    {
        date: '24-Aug-10',
        close: '239.93',
    },
    {
        date: '25-Aug-10',
        close: '242.89',
    },
    {
        date: '26-Aug-10',
        close: '240.28',
    },
    {
        date: '27-Aug-10',
        close: '241.62',
    },
    {
        date: '30-Aug-10',
        close: '242.50',
    },
    {
        date: '31-Aug-10',
        close: '243.10',
    },
    {
        date: '1-Sep-10',
        close: '250.33',
    },
    {
        date: '2-Sep-10',
        close: '252.17',
    },
    {
        date: '3-Sep-10',
        close: '258.77',
    },
    {
        date: '6-Sep-10',
        close: '258.77',
    },
    {
        date: '7-Sep-10',
        close: '257.81',
    },
    {
        date: '8-Sep-10',
        close: '262.92',
    },
    {
        date: '9-Sep-10',
        close: '263.07',
    },
    {
        date: '10-Sep-10',
        close: '263.41',
    },
    {
        date: '13-Sep-10',
        close: '267.04',
    },
    {
        date: '14-Sep-10',
        close: '268.06',
    },
    {
        date: '15-Sep-10',
        close: '270.22',
    },
    {
        date: '16-Sep-10',
        close: '276.57',
    },
    {
        date: '17-Sep-10',
        close: '275.37',
    },
    {
        date: '20-Sep-10',
        close: '283.23',
    },
    {
        date: '21-Sep-10',
        close: '283.77',
    },
    {
        date: '22-Sep-10',
        close: '287.75',
    },
    {
        date: '23-Sep-10',
        close: '288.92',
    },
    {
        date: '24-Sep-10',
        close: '292.32',
    },
    {
        date: '27-Sep-10',
        close: '291.16',
    },
    {
        date: '28-Sep-10',
        close: '286.86',
    },
    {
        date: '29-Sep-10',
        close: '287.37',
    },
    {
        date: '30-Sep-10',
        close: '283.75',
    },
    {
        date: '1-Oct-10',
        close: '282.52',
    },
    {
        date: '4-Oct-10',
        close: '278.64',
    },
    {
        date: '5-Oct-10',
        close: '288.94',
    },
    {
        date: '6-Oct-10',
        close: '289.19',
    },
    {
        date: '7-Oct-10',
        close: '289.22',
    },
    {
        date: '8-Oct-10',
        close: '294.07',
    },
    {
        date: '11-Oct-10',
        close: '295.36',
    },
    {
        date: '12-Oct-10',
        close: '298.54',
    },
    {
        date: '13-Oct-10',
        close: '300.14',
    },
    {
        date: '14-Oct-10',
        close: '302.31',
    },
    {
        date: '15-Oct-10',
        close: '314.74',
    },
    {
        date: '18-Oct-10',
        close: '318.00',
    },
    {
        date: '19-Oct-10',
        close: '309.49',
    },
    {
        date: '20-Oct-10',
        close: '310.53',
    },
    {
        date: '21-Oct-10',
        close: '309.52',
    },
    {
        date: '22-Oct-10',
        close: '307.47',
    },
    {
        date: '25-Oct-10',
        close: '308.84',
    },
    {
        date: '26-Oct-10',
        close: '308.05',
    },
    {
        date: '27-Oct-10',
        close: '307.83',
    },
    {
        date: '28-Oct-10',
        close: '305.24',
    },
    {
        date: '29-Oct-10',
        close: '300.98',
    },
    {
        date: '1-Nov-10',
        close: '304.18',
    },
    {
        date: '2-Nov-10',
        close: '309.36',
    },
    {
        date: '3-Nov-10',
        close: '312.80',
    },
    {
        date: '4-Nov-10',
        close: '318.27',
    },
    {
        date: '5-Nov-10',
        close: '317.13',
    },
    {
        date: '8-Nov-10',
        close: '318.62',
    },
    {
        date: '9-Nov-10',
        close: '316.08',
    },
    {
        date: '10-Nov-10',
        close: '318.03',
    },
    {
        date: '11-Nov-10',
        close: '316.66',
    },
    {
        date: '12-Nov-10',
        close: '308.03',
    },
    {
        date: '15-Nov-10',
        close: '307.04',
    },
    {
        date: '16-Nov-10',
        close: '301.59',
    },
    {
        date: '17-Nov-10',
        close: '300.50',
    },
    {
        date: '18-Nov-10',
        close: '308.43',
    },
    {
        date: '19-Nov-10',
        close: '306.73',
    },
    {
        date: '22-Nov-10',
        close: '313.36',
    },
    {
        date: '23-Nov-10',
        close: '308.73',
    },
    {
        date: '24-Nov-10',
        close: '314.80',
    },
    {
        date: '26-Nov-10',
        close: '315.00',
    },
    {
        date: '29-Nov-10',
        close: '316.87',
    },
    {
        date: '30-Nov-10',
        close: '311.15',
    },
    {
        date: '1-Dec-10',
        close: '316.40',
    },
    {
        date: '2-Dec-10',
        close: '318.15',
    },
    {
        date: '3-Dec-10',
        close: '317.44',
    },
    {
        date: '6-Dec-10',
        close: '320.15',
    },
    {
        date: '7-Dec-10',
        close: '318.21',
    },
    {
        date: '8-Dec-10',
        close: '321.01',
    },
    {
        date: '9-Dec-10',
        close: '319.76',
    },
    {
        date: '10-Dec-10',
        close: '320.56',
    },
    {
        date: '13-Dec-10',
        close: '321.67',
    },
    {
        date: '14-Dec-10',
        close: '320.29',
    },
    {
        date: '15-Dec-10',
        close: '320.36',
    },
    {
        date: '16-Dec-10',
        close: '321.25',
    },
    {
        date: '17-Dec-10',
        close: '320.61',
    },
    {
        date: '20-Dec-10',
        close: '322.21',
    },
    {
        date: '21-Dec-10',
        close: '324.20',
    },
    {
        date: '22-Dec-10',
        close: '325.16',
    },
    {
        date: '23-Dec-10',
        close: '323.60',
    },
    {
        date: '27-Dec-10',
        close: '324.68',
    },
    {
        date: '28-Dec-10',
        close: '325.47',
    },
    {
        date: '29-Dec-10',
        close: '325.29',
    },
    {
        date: '30-Dec-10',
        close: '323.66',
    },
    {
        date: '31-Dec-10',
        close: '322.56',
    },
    {
        date: '3-Jan-11',
        close: '329.57',
    },
    {
        date: '4-Jan-11',
        close: '331.29',
    },
    {
        date: '5-Jan-11',
        close: '334.00',
    },
    {
        date: '6-Jan-11',
        close: '333.73',
    },
    {
        date: '7-Jan-11',
        close: '336.12',
    },
    {
        date: '10-Jan-11',
        close: '342.46',
    },
    {
        date: '11-Jan-11',
        close: '341.64',
    },
    {
        date: '12-Jan-11',
        close: '344.42',
    },
    {
        date: '13-Jan-11',
        close: '345.68',
    },
    {
        date: '14-Jan-11',
        close: '348.48',
    },
    {
        date: '18-Jan-11',
        close: '340.65',
    },
    {
        date: '19-Jan-11',
        close: '338.84',
    },
    {
        date: '20-Jan-11',
        close: '332.68',
    },
    {
        date: '21-Jan-11',
        close: '326.72',
    },
    {
        date: '24-Jan-11',
        close: '337.45',
    },
    {
        date: '25-Jan-11',
        close: '341.40',
    },
    {
        date: '26-Jan-11',
        close: '343.85',
    },
    {
        date: '27-Jan-11',
        close: '343.21',
    },
    {
        date: '28-Jan-11',
        close: '336.10',
    },
    {
        date: '31-Jan-11',
        close: '339.32',
    },
    {
        date: '1-Feb-11',
        close: '345.03',
    },
    {
        date: '2-Feb-11',
        close: '344.32',
    },
    {
        date: '3-Feb-11',
        close: '343.44',
    },
    {
        date: '4-Feb-11',
        close: '346.50',
    },
    {
        date: '7-Feb-11',
        close: '351.88',
    },
    {
        date: '8-Feb-11',
        close: '355.20',
    },
    {
        date: '9-Feb-11',
        close: '358.16',
    },
    {
        date: '10-Feb-11',
        close: '354.54',
    },
    {
        date: '11-Feb-11',
        close: '356.85',
    },
    {
        date: '14-Feb-11',
        close: '359.18',
    },
    {
        date: '15-Feb-11',
        close: '359.90',
    },
    {
        date: '16-Feb-11',
        close: '363.13',
    },
    {
        date: '17-Feb-11',
        close: '358.30',
    },
    {
        date: '18-Feb-11',
        close: '350.56',
    },
    {
        date: '22-Feb-11',
        close: '338.61',
    },
    {
        date: '23-Feb-11',
        close: '342.62',
    },
    {
        date: '24-Feb-11',
        close: '342.88',
    },
    {
        date: '25-Feb-11',
        close: '348.16',
    },
    {
        date: '28-Feb-11',
        close: '353.21',
    },
    {
        date: '1-Mar-11',
        close: '349.31',
    },
    {
        date: '2-Mar-11',
        close: '352.12',
    },
    {
        date: '3-Mar-11',
        close: '359.56',
    },
    {
        date: '4-Mar-11',
        close: '360.00',
    },
    {
        date: '7-Mar-11',
        close: '355.36',
    },
    {
        date: '8-Mar-11',
        close: '355.76',
    },
    {
        date: '9-Mar-11',
        close: '352.47',
    },
    {
        date: '10-Mar-11',
        close: '346.67',
    },
    {
        date: '11-Mar-11',
        close: '351.99',
    },
    {
        date: '14-Mar-11',
        close: '353.56',
    },
    {
        date: '15-Mar-11',
        close: '345.43',
    },
    {
        date: '16-Mar-11',
        close: '330.01',
    },
    {
        date: '17-Mar-11',
        close: '334.64',
    },
    {
        date: '18-Mar-11',
        close: '330.67',
    },
    {
        date: '21-Mar-11',
        close: '339.30',
    },
    {
        date: '22-Mar-11',
        close: '341.20'
    },
    {
        date: '23-Mar-11',
        close: '339.19'
    },
    {
        date: '24-Mar-11',
        close: '344.97'
    },
    {
        date: '25-Mar-11',
        close: '351.54'
    },
    {
        date: '28-Mar-11',
        close: '350.44'
    },
    {
        date: '29-Mar-11',
        close: '350.96'
    },
    {
        date: '30-Mar-11',
        close: '348.63'
    },
    {
        date: '31-Mar-11',
        close: '348.51'
    },
    {
        date: '1-Apr-11',
        close: '344.56'
    },
    {
        date: '4-Apr-11',
        close: '341.19'
    },
    {
        date: '5-Apr-11',
        close: '338.89'
    },
    {
        date: '6-Apr-11',
        close: '338.04'
    },
    {
        date: '7-Apr-11',
        close: '338.08'
    },
    {
        date: '8-Apr-11',
        close: '335.06'
    },
    {
        date: '11-Apr-11',
        close: '330.80'
    },
    {
        date: '12-Apr-11',
        close: '332.40'
    },
    {
        date: '13-Apr-11',
        close: '336.13'
    },
    {
        date: '14-Apr-11',
        close: '332.42'
    },
    {
        date: '15-Apr-11',
        close: '327.46'
    },
    {
        date: '18-Apr-11',
        close: '331.85'
    },
    {
        date: '19-Apr-11',
        close: '337.86'
    },
    {
        date: '20-Apr-11',
        close: '342.41'
    },
    {
        date: '21-Apr-11',
        close: '350.70'
    },
    {
        date: '25-Apr-11',
        close: '353.01'
    },
    {
        date: '26-Apr-11',
        close: '350.42'
    },
    {
        date: '27-Apr-11',
        close: '350.15'
    },
    {
        date: '28-Apr-11',
        close: '346.75'
    },
    {
        date: '29-Apr-11',
        close: '350.13'
    },
    {
        date: '2-May-11',
        close: '346.28'
    },
    {
        date: '3-May-11',
        close: '348.20'
    },
    {
        date: '4-May-11',
        close: '349.57'
    },
    {
        date: '5-May-11',
        close: '346.75'
    },
    {
        date: '6-May-11',
        close: '346.66'
    },
    {
        date: '9-May-11',
        close: '347.60'
    },
    {
        date: '10-May-11',
        close: '349.45'
    },
    {
        date: '11-May-11',
        close: '347.23'
    },
    {
        date: '12-May-11',
        close: '346.57'
    },
    {
        date: '13-May-11',
        close: '340.50'
    },
    {
        date: '16-May-11',
        close: '333.30'
    },
    {
        date: '17-May-11',
        close: '336.14'
    },
    {
        date: '18-May-11',
        close: '339.87'
    },
    {
        date: '19-May-11',
        close: '340.53'
    },
    {
        date: '20-May-11',
        close: '335.22'
    },
    {
        date: '23-May-11',
        close: '334.40'
    },
    {
        date: '24-May-11',
        close: '332.19'
    },
    {
        date: '25-May-11',
        close: '336.78'
    },
    {
        date: '26-May-11',
        close: '335.00'
    },
    {
        date: '27-May-11',
        close: '337.41'
    },
    {
        date: '31-May-11',
        close: '347.83'
    },
    {
        date: '1-Jun-11',
        close: '345.51'
    },
    {
        date: '2-Jun-11',
        close: '346.10'
    },
    {
        date: '3-Jun-11',
        close: '343.44'
    },
    {
        date: '6-Jun-11',
        close: '338.04'
    },
    {
        date: '7-Jun-11',
        close: '332.04'
    },
    {
        date: '8-Jun-11',
        close: '332.24'
    },
    {
        date: '9-Jun-11',
        close: '331.49'
    },
    {
        date: '10-Jun-11',
        close: '325.90'
    },
    {
        date: '13-Jun-11',
        close: '326.60'
    },
    {
        date: '14-Jun-11',
        close: '332.44'
    },
    {
        date: '15-Jun-11',
        close: '326.75'
    },
    {
        date: '16-Jun-11',
        close: '325.16'
    },
    {
        date: '17-Jun-11',
        close: '320.26'
    },
    {
        date: '20-Jun-11',
        close: '315.32'
    },
    {
        date: '21-Jun-11',
        close: '325.30'
    },
    {
        date: '22-Jun-11',
        close: '322.61'
    },
    {
        date: '23-Jun-11',
        close: '331.23'
    },
    {
        date: '24-Jun-11',
        close: '326.35'
    },
    {
        date: '27-Jun-11',
        close: '332.04'
    },
    {
        date: '28-Jun-11',
        close: '335.26'
    },
    {
        date: '29-Jun-11',
        close: '334.04'
    },
    {
        date: '30-Jun-11',
        close: '335.67'
    },
    {
        date: '1-Jul-11',
        close: '343.26'
    },
    {
        date: '5-Jul-11',
        close: '349.43'
    },
    {
        date: '6-Jul-11',
        close: '351.76'
    },
    {
        date: '7-Jul-11',
        close: '357.20'
    },
    {
        date: '8-Jul-11',
        close: '359.71'
    },
    {
        date: '11-Jul-11',
        close: '354.00'
    },
    {
        date: '12-Jul-11',
        close: '353.75'
    },
    {
        date: '13-Jul-11',
        close: '358.02'
    },
    {
        date: '14-Jul-11',
        close: '357.77'
    },
    {
        date: '15-Jul-11',
        close: '364.92'
    },
    {
        date: '18-Jul-11',
        close: '373.80'
    },
    {
        date: '19-Jul-11',
        close: '376.85'
    },
    {
        date: '20-Jul-11',
        close: '386.90'
    },
    {
        date: '21-Jul-11',
        close: '387.29'
    },
    {
        date: '22-Jul-11',
        close: '393.30'
    },
    {
        date: '25-Jul-11',
        close: '398.50'
    },
    {
        date: '26-Jul-11',
        close: '403.41'
    },
    {
        date: '27-Jul-11',
        close: '392.59'
    },
    {
        date: '28-Jul-11',
        close: '391.82'
    },
    {
        date: '29-Jul-11',
        close: '390.48'
    },
    {
        date: '1-Aug-11',
        close: '396.75'
    },
    {
        date: '2-Aug-11',
        close: '388.91'
    },
    {
        date: '3-Aug-11',
        close: '392.57'
    },
    {
        date: '4-Aug-11',
        close: '377.37'
    },
    {
        date: '5-Aug-11',
        close: '373.62'
    },
    {
        date: '8-Aug-11',
        close: '353.21'
    },
    {
        date: '9-Aug-11',
        close: '374.01'
    },
    {
        date: '10-Aug-11',
        close: '363.69'
    },
    {
        date: '11-Aug-11',
        close: '373.70'
    },
    {
        date: '12-Aug-11',
        close: '376.99'
    },
    {
        date: '15-Aug-11',
        close: '383.41'
    },
    {
        date: '16-Aug-11',
        close: '380.48'
    },
    {
        date: '17-Aug-11',
        close: '380.44'
    },
    {
        date: '18-Aug-11',
        close: '366.05'
    },
    {
        date: '19-Aug-11',
        close: '356.03'
    },
    {
        date: '22-Aug-11',
        close: '356.44'
    },
    {
        date: '23-Aug-11',
        close: '373.60'
    },
    {
        date: '24-Aug-11',
        close: '376.18'
    },
    {
        date: '25-Aug-11',
        close: '373.72'
    },
    {
        date: '26-Aug-11',
        close: '383.58'
    },
    {
        date: '29-Aug-11',
        close: '389.97'
    },
    {
        date: '30-Aug-11',
        close: '389.99'
    },
    {
        date: '31-Aug-11',
        close: '384.83'
    },
    {
        date: '1-Sep-11',
        close: '381.03'
    },
    {
        date: '2-Sep-11',
        close: '374.05'
    },
    {
        date: '6-Sep-11',
        close: '379.74'
    },
    {
        date: '7-Sep-11',
        close: '383.93'
    },
    {
        date: '8-Sep-11',
        close: '384.14'
    },
    {
        date: '9-Sep-11',
        close: '377.48'
    },
    {
        date: '12-Sep-11',
        close: '379.94'
    },
    {
        date: '13-Sep-11',
        close: '384.62'
    },
    {
        date: '14-Sep-11',
        close: '389.30'
    },
    {
        date: '15-Sep-11',
        close: '392.96'
    },
    {
        date: '16-Sep-11',
        close: '400.50'
    },
    {
        date: '19-Sep-11',
        close: '411.63'
    },
    {
        date: '20-Sep-11',
        close: '413.45'
    },
    {
        date: '21-Sep-11',
        close: '412.14'
    },
    {
        date: '22-Sep-11',
        close: '401.82'
    },
    {
        date: '23-Sep-11',
        close: '404.30'
    },
    {
        date: '26-Sep-11',
        close: '403.17'
    },
    {
        date: '27-Sep-11',
        close: '399.26'
    },
    {
        date: '28-Sep-11',
        close: '397.01'
    },
    {
        date: '29-Sep-11',
        close: '390.57'
    },
    {
        date: '30-Sep-11',
        close: '381.32'
    },
    {
        date: '3-Oct-11',
        close: '374.60'
    },
    {
        date: '4-Oct-11',
        close: '372.50'
    },
    {
        date: '5-Oct-11',
        close: '378.25'
    },
    {
        date: '6-Oct-11',
        close: '377.37'
    },
    {
        date: '7-Oct-11',
        close: '369.80'
    },
    {
        date: '10-Oct-11',
        close: '388.81'
    },
    {
        date: '11-Oct-11',
        close: '400.29'
    },
    {
        date: '12-Oct-11',
        close: '402.19'
    },
    {
        date: '13-Oct-11',
        close: '408.43'
    },
    {
        date: '14-Oct-11',
        close: '422.00'
    },
    {
        date: '17-Oct-11',
        close: '419.99'
    },
    {
        date: '18-Oct-11',
        close: '422.24'
    },
    {
        date: '19-Oct-11',
        close: '398.62'
    },
    {
        date: '20-Oct-11',
        close: '395.31'
    },
    {
        date: '21-Oct-11',
        close: '392.87'
    },
    {
        date: '24-Oct-11',
        close: '405.77'
    },
    {
        date: '25-Oct-11',
        close: '397.77'
    },
    {
        date: '26-Oct-11',
        close: '400.60'
    },
    {
        date: '27-Oct-11',
        close: '404.69'
    },
    {
        date: '28-Oct-11',
        close: '404.95'
    },
    {
        date: '31-Oct-11',
        close: '404.78'
    },
    {
        date: '1-Nov-11',
        close: '396.51'
    },
    {
        date: '2-Nov-11',
        close: '397.41'
    },
    {
        date: '3-Nov-11',
        close: '403.07'
    },
    {
        date: '4-Nov-11',
        close: '400.24'
    },
    {
        date: '7-Nov-11',
        close: '399.73'
    },
    {
        date: '8-Nov-11',
        close: '406.23'
    },
    {
        date: '9-Nov-11',
        close: '395.28'
    },
    {
        date: '10-Nov-11',
        close: '385.22'
    },
    {
        date: '11-Nov-11',
        close: '384.62'
    },
    {
        date: '14-Nov-11',
        close: '379.26'
    },
    {
        date: '15-Nov-11',
        close: '388.83'
    },
    {
        date: '16-Nov-11',
        close: '384.77'
    },
    {
        date: '17-Nov-11',
        close: '377.41'
    },
    {
        date: '18-Nov-11',
        close: '374.94'
    },
    {
        date: '21-Nov-11',
        close: '369.01'
    },
    {
        date: '22-Nov-11',
        close: '376.51'
    },
    {
        date: '23-Nov-11',
        close: '366.99'
    },
    {
        date: '25-Nov-11',
        close: '363.57'
    },
    {
        date: '28-Nov-11',
        close: '376.12'
    },
    {
        date: '29-Nov-11',
        close: '373.20'
    },
    {
        date: '30-Nov-11',
        close: '382.20'
    },
    {
        date: '1-Dec-11',
        close: '387.93'
    },
    {
        date: '2-Dec-11',
        close: '389.70'
    },
    {
        date: '5-Dec-11',
        close: '393.01'
    },
    {
        date: '6-Dec-11',
        close: '390.95'
    },
    {
        date: '7-Dec-11',
        close: '389.09'
    },
    {
        date: '8-Dec-11',
        close: '390.66'
    },
    {
        date: '9-Dec-11',
        close: '393.62'
    },
    {
        date: '12-Dec-11',
        close: '391.84'
    },
    {
        date: '13-Dec-11',
        close: '388.81'
    },
    {
        date: '14-Dec-11',
        close: '380.19'
    },
    {
        date: '15-Dec-11',
        close: '378.94'
    },
    {
        date: '16-Dec-11',
        close: '381.02'
    },
    {
        date: '19-Dec-11',
        close: '382.21'
    },
    {
        date: '20-Dec-11',
        close: '395.95'
    },
    {
        date: '21-Dec-11',
        close: '396.44'
    },
    {
        date: '22-Dec-11',
        close: '398.55'
    },
    {
        date: '23-Dec-11',
        close: '403.43'
    },
    {
        date: '27-Dec-11',
        close: '406.53'
    },
    {
        date: '28-Dec-11',
        close: '402.64'
    },
    {
        date: '29-Dec-11',
        close: '405.12'
    },
    {
        date: '30-Dec-11',
        close: '405.00'
    },
    {
        date: '3-Jan-12',
        close: '411.23'
    },
    {
        date: '4-Jan-12',
        close: '413.44'
    },
    {
        date: '5-Jan-12',
        close: '418.03'
    },
    {
        date: '6-Jan-12',
        close: '422.40'
    },
    {
        date: '9-Jan-12',
        close: '421.73'
    },
    {
        date: '10-Jan-12',
        close: '423.24'
    },
    {
        date: '11-Jan-12',
        close: '422.55'
    },
    {
        date: '12-Jan-12',
        close: '421.39'
    },
    {
        date: '13-Jan-12',
        close: '419.81'
    },
    {
        date: '17-Jan-12',
        close: '424.70'
    },
    {
        date: '18-Jan-12',
        close: '429.11'
    },
    {
        date: '19-Jan-12',
        close: '427.75'
    },
    {
        date: '20-Jan-12',
        close: '420.30'
    },
    {
        date: '23-Jan-12',
        close: '427.41'
    },
    {
        date: '24-Jan-12',
        close: '420.41'
    },
    {
        date: '25-Jan-12',
        close: '446.66'
    },
    {
        date: '26-Jan-12',
        close: '444.63'
    },
    {
        date: '27-Jan-12',
        close: '447.28'
    },
    {
        date: '30-Jan-12',
        close: '453.01'
    },
    {
        date: '31-Jan-12',
        close: '456.48'
    },
    {
        date: '1-Feb-12',
        close: '456.19'
    },
    {
        date: '2-Feb-12',
        close: '455.12'
    },
    {
        date: '3-Feb-12',
        close: '459.68'
    },
    {
        date: '6-Feb-12',
        close: '463.97'
    },
    {
        date: '7-Feb-12',
        close: '468.83'
    },
    {
        date: '8-Feb-12',
        close: '476.68'
    },
    {
        date: '9-Feb-12',
        close: '493.17'
    },
    {
        date: '10-Feb-12',
        close: '493.42'
    },
    {
        date: '13-Feb-12',
        close: '502.60'
    },
    {
        date: '14-Feb-12',
        close: '509.46'
    },
    {
        date: '15-Feb-12',
        close: '497.67'
    },
    {
        date: '16-Feb-12',
        close: '502.21'
    },
    {
        date: '17-Feb-12',
        close: '502.12'
    },
    {
        date: '21-Feb-12',
        close: '514.85'
    },
    {
        date: '22-Feb-12',
        close: '513.04'
    },
    {
        date: '23-Feb-12',
        close: '516.39'
    },
    {
        date: '24-Feb-12',
        close: '522.41'
    },
    {
        date: '27-Feb-12',
        close: '525.76'
    },
    {
        date: '28-Feb-12',
        close: '535.41'
    },
    {
        date: '29-Feb-12',
        close: '542.44'
    },
    {
        date: '1-Mar-12',
        close: '544.47'
    },
    {
        date: '2-Mar-12',
        close: '545.18'
    },
    {
        date: '5-Mar-12',
        close: '533.16'
    },
    {
        date: '6-Mar-12',
        close: '530.26'
    },
    {
        date: '7-Mar-12',
        close: '530.69'
    },
    {
        date: '8-Mar-12',
        close: '541.99'
    },
    {
        date: '9-Mar-12',
        close: '545.17'
    },
    {
        date: '12-Mar-12',
        close: '552.00'
    },
    {
        date: '13-Mar-12',
        close: '568.10'
    },
    {
        date: '14-Mar-12',
        close: '589.58'
    },
    {
        date: '15-Mar-12',
        close: '585.56'
    },
    {
        date: '16-Mar-12',
        close: '585.57'
    },
    {
        date: '19-Mar-12',
        close: '601.10'
    },
    {
        date: '20-Mar-12',
        close: '605.96'
    },
    {
        date: '21-Mar-12',
        close: '602.50'
    },
    {
        date: '22-Mar-12',
        close: '599.34'
    },
    {
        date: '23-Mar-12',
        close: '596.05'
    },
    {
        date: '26-Mar-12',
        close: '606.98'
    },
    {
        date: '27-Mar-12',
        close: '614.48'
    },
    {
        date: '28-Mar-12',
        close: '617.62'
    },
    {
        date: '29-Mar-12',
        close: '609.86'
    },
    {
        date: '30-Mar-12',
        close: '599.55'
    },
    {
        date: '2-Apr-12',
        close: '618.63'
    },
    {
        date: '3-Apr-12',
        close: '629.32'
    },
    {
        date: '4-Apr-12',
        close: '624.31'
    },
    {
        date: '5-Apr-12',
        close: '633.68'
    },
    {
        date: '9-Apr-12',
        close: '636.23'
    },
    {
        date: '10-Apr-12',
        close: '628.44'
    },
    {
        date: '11-Apr-12',
        close: '626.20'
    },
    {
        date: '12-Apr-12',
        close: '622.77'
    },
    {
        date: '13-Apr-12',
        close: '605.23'
    },
    {
        date: '16-Apr-12',
        close: '580.13'
    },
    {
        date: '17-Apr-12',
        close: '609.70'
    },
    {
        date: '18-Apr-12',
        close: '608.34'
    },
    {
        date: '19-Apr-12',
        close: '587.44'
    },
    {
        date: '20-Apr-12',
        close: '572.98'
    },
    {
        date: '23-Apr-12',
        close: '571.70'
    },
    {
        date: '24-Apr-12',
        close: '560.28'
    },
    {
        date: '25-Apr-12',
        close: '610.00'
    },
    {
        date: '26-Apr-12',
        close: '607.70'
    },
    {
        date: '27-Apr-12',
        close: '603.00'
    },
    {
        date: '30-Apr-12',
        close: '583.98'
    },
    {
        date: '1-May-12',
        close: '582.13'
    }
]

export default mockdata;
