/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdAttributeMap } from "../../types/OcdImporterData";

export const attributeMap: OcdAttributeMap = {
    "cidr_blocks": {
        "label": "IPV4 CIDRs"
    },
    "create_vnic_details": {
        "label": "Network Details"
    },
    "dns_label": {
        "label": "DNS Label"
    },
    "ipv6private_cidr_blocks": {
        "label": "IPV6 Private CIDRs"
    },
    "is_ipv6enabled": {
        "label": "IPV6 Enabled"
    }
}
