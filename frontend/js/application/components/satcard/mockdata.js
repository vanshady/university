const mockdata = [
    {
        date: 'Jan 2000',
        value: 64.56,
    },
    {
        date: 'Feb 2000',
        value: 68.87,
    },
    {
        date: 'Mar 2000',
        value: 67,
    },
    {
        date: 'Apr 2000',
        value: 55.19,
    },
    {
        date: 'May 2000',
        value: 48.31,
    },
    {
        date: 'Jun 2000',
        value: 36.31,
    },
    {
        date: 'Jul 2000',
        value: 30.12,
    },
    {
        date: 'Aug 2000',
        value: 41.5,
    },
    {
        date: 'Sep 2000',
        value: 38.44,
    },
    {
        date: 'Oct 2000',
        value: 36.62,
    },
    {
        date: 'Nov 2000',
        value: 24.69,
    },
    {
        date: 'Dec 2000',
        value: 15.56,
    },
    {
        date: 'Jan 2001',
        value: 17.31,
    },
    {
        date: 'Feb 2001',
        value: 10.19,
    },
    {
        date: 'Mar 2001',
        value: 10.23,
    },
    {
        date: 'Apr 2001',
        value: 15.78,
    },
    {
        date: 'May 2001',
        value: 16.69,
    },
    {
        date: 'Jun 2001',
        value: 14.15,
    },
    {
        date: 'Jul 2001',
        value: 12.49,
    },
    {
        date: 'Aug 2001',
        value: 8.94,
    },
    {
        date: 'Sep 2001',
        value: 5.97,
    },
    {
        date: 'Oct 2001',
        value: 6.98,
    },
    {
        date: 'Nov 2001',
        value: 11.32,
    },
    {
        date: 'Dec 2001',
        value: 10.82,
    },
    {
        date: 'Jan 2002',
        value: 14.19,
    },
    {
        date: 'Feb 2002',
        value: 14.1,
    },
    {
        date: 'Mar 2002',
        value: 14.3,
    },
    {
        date: 'Apr 2002',
        value: 16.69,
    },
    {
        date: 'May 2002',
        value: 18.23,
    },
    {
        date: 'Jun 2002',
        value: 16.25,
    },
    {
        date: 'Jul 2002',
        value: 14.45,
    },
    {
        date: 'Aug 2002',
        value: 14.94,
    },
    {
        date: 'Sep 2002',
        value: 15.93,
    },
    {
        date: 'Oct 2002',
        value: 19.36,
    },
    {
        date: 'Nov 2002',
        value: 23.35,
    },
    {
        date: 'Dec 2002',
        value: 18.89,
    },
    {
        date: 'Jan 2003',
        value: 21.85,
    },
    {
        date: 'Feb 2003',
        value: 22.01,
    },
    {
        date: 'Mar 2003',
        value: 26.03,
    },
    {
        date: 'Apr 2003',
        value: 28.69,
    },
    {
        date: 'May 2003',
        value: 35.89,
    },
    {
        date: 'Jun 2003',
        value: 36.32,
    },
    {
        date: 'Jul 2003',
        value: 41.64,
    },
    {
        date: 'Aug 2003',
        value: 46.32,
    },
    {
        date: 'Sep 2003',
        value: 48.43,
    },
    {
        date: 'Oct 2003',
        value: 54.43,
    },
    {
        date: 'Nov 2003',
        value: 53.97,
    },
    {
        date: 'Dec 2003',
        value: 52.62,
    },
    {
        date: 'Jan 2004',
        value: 50.4,
    },
    {
        date: 'Feb 2004',
        value: 43.01,
    },
    {
        date: 'Mar 2004',
        value: 43.28,
    },
    {
        date: 'Apr 2004',
        value: 43.6,
    },
    {
        date: 'May 2004',
        value: 48.5,
    },
    {
        date: 'Jun 2004',
        value: 54.4,
    },
    {
        date: 'Jul 2004',
        value: 38.92,
    },
    {
        date: 'Aug 2004',
        value: 38.14,
    },
    {
        date: 'Sep 2004',
        value: 40.86,
    },
    {
        date: 'Oct 2004',
        value: 34.13,
    },
    {
        date: 'Nov 2004',
        value: 39.68,
    },
    {
        date: 'Dec 2004',
        value: 44.29,
    },
    {
        date: 'Jan 2005',
        value: 43.22,
    },
    {
        date: 'Feb 2005',
        value: 35.18,
    },
    {
        date: 'Mar 2005',
        value: 34.27,
    },
    {
        date: 'Apr 2005',
        value: 32.36,
    },
    {
        date: 'May 2005',
        value: 35.51,
    },
    {
        date: 'Jun 2005',
        value: 33.09,
    },
    {
        date: 'Jul 2005',
        value: 45.15,
    },
    {
        date: 'Aug 2005',
        value: 42.7,
    },
    {
        date: 'Sep 2005',
        value: 45.3,
    },
    {
        date: 'Oct 2005',
        value: 39.86,
    },
    {
        date: 'Nov 2005',
        value: 48.46,
    },
    {
        date: 'Dec 2005',
        value: 47.15,
    },
    {
        date: 'Jan 2006',
        value: 44.82,
    },
    {
        date: 'Feb 2006',
        value: 37.44,
    },
    {
        date: 'Mar 2006',
        value: 36.53,
    },
    {
        date: 'Apr 2006',
        value: 35.21,
    },
    {
        date: 'May 2006',
        value: 34.61,
    },
    {
        date: 'Jun 2006',
        value: 38.68,
    },
    {
        date: 'Jul 2006',
        value: 26.89,
    },
    {
        date: 'Aug 2006',
        value: 30.83,
    },
    {
        date: 'Sep 2006',
        value: 32.12,
    },
    {
        date: 'Oct 2006',
        value: 38.09,
    },
    {
        date: 'Nov 2006',
        value: 40.34,
    },
    {
        date: 'Dec 2006',
        value: 39.46,
    },
    {
        date: 'Jan 2007',
        value: 37.67,
    },
    {
        date: 'Feb 2007',
        value: 39.14,
    },
    {
        date: 'Mar 2007',
        value: 39.79,
    },
    {
        date: 'Apr 2007',
        value: 61.33,
    },
    {
        date: 'May 2007',
        value: 69.14,
    },
    {
        date: 'Jun 2007',
        value: 68.41,
    },
    {
        date: 'Jul 2007',
        value: 78.54,
    },
    {
        date: 'Aug 2007',
        value: 79.91,
    },
    {
        date: 'Sep 2007',
        value: 93.15,
    },
    {
        date: 'Oct 2007',
        value: 89.15,
    },
    {
        date: 'Nov 2007',
        value: 90.56,
    },
    {
        date: 'Dec 2007',
        value: 92.64,
    },
    {
        date: 'Jan 2008',
        value: 77.7,
    },
    {
        date: 'Feb 2008',
        value: 64.47,
    },
    {
        date: 'Mar 2008',
        value: 71.3,
    },
    {
        date: 'Apr 2008',
        value: 78.63,
    },
    {
        date: 'May 2008',
        value: 81.62,
    },
    {
        date: 'Jun 2008',
        value: 73.33,
    },
    {
        date: 'Jul 2008',
        value: 76.34,
    },
    {
        date: 'Aug 2008',
        value: 80.81,
    },
    {
        date: 'Sep 2008',
        value: 72.76,
    },
    {
        date: 'Oct 2008',
        value: 57.24,
    },
    {
        date: 'Nov 2008',
        value: 42.7,
    },
    {
        date: 'Dec 2008',
        value: 51.28,
    },
    {
        date: 'Jan 2009',
        value: 58.82,
    },
    {
        date: 'Feb 2009',
        value: 64.79,
    },
    {
        date: 'Mar 2009',
        value: 73.44,
    },
    {
        date: 'Apr 2009',
        value: 80.52,
    },
    {
        date: 'May 2009',
        value: 77.99,
    },
    {
        date: 'Jun 2009',
        value: 83.66,
    },
    {
        date: 'Jul 2009',
        value: 85.76,
    },
    {
        date: 'Aug 2009',
        value: 81.19,
    },
    {
        date: 'Sep 2009',
        value: 93.36,
    },
    {
        date: 'Oct 2009',
        value: 118.81,
    },
    {
        date: 'Nov 2009',
        value: 135.91,
    },
    {
        date: 'Dec 2009',
        value: 134.52,
    },
    {
        date: 'Jan 2010',
        value: 125.41,
    },
    {
        date: 'Feb 2010',
        value: 118.4,
    },
    {
        date: 'Mar 2010',
        value: 128.82,
    },
];

export default mockdata;
