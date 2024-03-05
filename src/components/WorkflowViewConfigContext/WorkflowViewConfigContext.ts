import React, {useContext} from "react";
import {PluginCollectionConfig} from "../../index";

export const WorkflowViewConfigContext = React.createContext<PluginCollectionConfig>(undefined)

export const usePluginConfig = () => useContext(WorkflowViewConfigContext);