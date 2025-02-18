import './Description.scss'

import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

/** @reactComponent */
export default function Description({children,}: ReactPropertiesWithChildren<NonNullReactElementOrStringOrArray>,) {
    return <div className="description-container container-sm rounded-5 p-2 mx-auto mt-1 mb-3">{children}</div>
}
