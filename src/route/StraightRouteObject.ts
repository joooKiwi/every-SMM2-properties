import type {LoaderFunctionArgs, NonIndexRouteObject} from 'react-router'

/**
 * An implementation of a {@link import('react-router').RouteObject route object}
 * that is straight to the path it needs to go.
 *
 * Meaning it only has a {@link path} and a redirection action.
 */
export class StraightRouteObject<const PATH extends string,
    const CONTEXT = unknown, >
    implements NonIndexRouteObject {

    public readonly path
    public readonly loader

    public constructor(path: PATH, redirectionAction: (loaderArguments: LoaderFunctionArgs<CONTEXT>,) => never,) {
        this.path = path
        this.loader = redirectionAction
    }

}
