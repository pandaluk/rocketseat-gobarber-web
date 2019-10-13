import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
