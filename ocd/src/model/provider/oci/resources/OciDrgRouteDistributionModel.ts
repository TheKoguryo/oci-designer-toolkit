/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciDrgRouteDistributionModel"

export interface OciDrgRouteDistributionModel extends AutoGenerated.OciDrgRouteDistributionModel {}

export namespace OciDrgRouteDistributionModel {
    export function newResource(type?: string): OciDrgRouteDistributionModel {
        return {
            ...AutoGenerated.OciDrgRouteDistributionModel.newResource('drg_route_distribution'),
        }
    }
    
}

export class OciDrgRouteDistributionModelClient {
    static new(): OciDrgRouteDistributionModel {
        return OciDrgRouteDistributionModel.newResource()
    }
}

export default OciDrgRouteDistributionModelClient
