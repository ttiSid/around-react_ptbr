function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy;{`${currentYear}. Sidney Sudatti`}
      </p>
    </footer>
  );
}

export default Footer;
