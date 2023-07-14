import compose from "compose-function";
import {withRouter} from "./withRouter";
import {withUIlib} from "./withUIlib";

export const withProviders = compose(withRouter, withUIlib);
