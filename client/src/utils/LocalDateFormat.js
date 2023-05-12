const LocalDateFormat = (dateSting) => {
   const date = new Date(dateSting);
   const formattedDate = date
      .toLocaleDateString('en-GB', {
         day: 'numeric',
         month: 'short',
         year: 'numeric'
      })
      .replace(/ /g, '-');
   return formattedDate;
};

export default LocalDateFormat;