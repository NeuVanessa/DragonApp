interface Response {
  token: string;
  user: {
    name: string;
    email: string;
    avatar:string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWViZDI3NDllNjNlMzU3YjUyMDhmYSIsImlhdCI6MTYzODg4OTI4OX0.agt2rh0XlvHaq_tRmNWMajGjuepg5yjxzNcqXJExkEI",
        user: {
          name: "Vanessa Lopes",
          email: "vanessa.lopes@adm.com.br",
          avatar:''
        },
      });
    }, 1000);
  });
}
