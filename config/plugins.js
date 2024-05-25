module.exports = ({ env }) => ({
    // ...
    "strapi-chatgpt": {
      enabled: true,
    },
    email: {
      config: {
        provider: 'gmail-api',
        providerOptions: {
          auth: {
            userId: env('EMAIL_OAUTH2_USERID'),
            clientId: env('EMAIL_OAUTH2_CLIENTID'),
            clientSecret: env('EMAIL_OAUTH2_CLIENTSECRET'),
            refreshToken: env('EMAIL_OAUTH2_REFRESHTOKEN'),
          },
        },
        settings: {
          defaultFrom: env('EMAIL_FROM'),
          defaultReplyTo: env('EMAIL_REPLYTO'),
          testAddress: env('EMAIL_TEST_ADDRESS'),
        },
      },
    },    
  });

/*

    email: {
      config: {
        provider: 'strapi-provider-email-smtp',
        providerOptions: {
          host: 'smtp.gmail.com', //SMTP Host
          port: 465   , //SMTP Port
          secure: true,
          username: 'USERNAME',
          password: 'PASSWORD',
          rejectUnauthorized: true,
          requireTLS: true,
          connectionTimeout: 1,
        },
      },
      settings: {
        defaultFrom: 'pow3r92isgheere@gmail.com',
        defaultReplyTo: 'pow3r92isgheere@gmail.com',
      }, 
    },    
  */
