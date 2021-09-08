export const query = (offset: number, gte: Date, lte: Date) => {
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
      select: {
        date_utc: 1,
        date_local: 1,
        id: 1,
        name: 1,
        success: 1,
        details: 1,
        links: {
          patch: {
            small: 1,
          },
        },
      },
    },
  };

  return qr;
};
