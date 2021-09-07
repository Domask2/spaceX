export const query = (offset:number, gte:string, lte:Date) => {
  const qr = {
    query: {
      date_utc: {
        $gte: gte,
        $lte: lte,
      },
    },
    options: {
      limit: 6,
      offset: offset,
    },
  };

  return qr;
};