import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let bodyClassName = '';

 if (ctx.pathname === '/contactus') {
      bodyClassName = 'myCustomClass';
    } 
    return { ...initialProps, bodyClassName };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className={this.props.bodyClassName}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
