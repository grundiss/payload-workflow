import React, { forwardRef } from 'react'
import { CollectionConfig } from "payload/types";
import { useConfig } from "payload/components/utilities";
import { usePluginConfig } from "../WorkflowViewConfigContext/WorkflowViewConfigContext";
import './sytles.scss';
import BoardCardDefaultContent from "../BoardCardDefaultContent/BoardCardDefaultContent";

const baseClass = 'board-card';

interface BoardCardProps {
  collection: CollectionConfig
  data: any
}

const BoardCard = forwardRef((props: BoardCardProps, ref: React.Ref<any>) => {
  const {collection, data, ...rest} = props
  const {routes: {admin: payloadAdmin}} = useConfig();
  const {slug, admin} = collection;
  const {cardContentComponent: CardContent = BoardCardDefaultContent} = usePluginConfig();

  return (
    <div
      className={ baseClass }
      ref={ ref }
      { ...rest }
    >
      <CardContent admin={admin} data={data} link={`${ payloadAdmin }/collections/${ slug }/${ data.id }`}/>
    </div>
  )
})

export default BoardCard
