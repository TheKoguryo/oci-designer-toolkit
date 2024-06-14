/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import OcdDocument from '../../../../OcdDocument'
import { ResourceElementConfig, ResourceProperties } from '../../../OcdPropertyTypes'
import * as AutoGenerated from './generated/OciVolumeAttachment'
import { OciVolumeAttachmentConfigs } from './configs/OciVolumeAttachment'

export const OciVolumeAttachment = ({ ocdDocument, setOcdDocument, resource, onDelete }: ResourceProperties): JSX.Element => {
    const configs: ResourceElementConfig[] = OciVolumeAttachmentConfigs.configs()
    return (
        <AutoGenerated.OciVolumeAttachment ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} configs={configs} onDelete={onDelete} />
    )
}
