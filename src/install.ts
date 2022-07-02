import {
  getComponentPrefix,
  setGlobalConfig,
  SheepUIOptions
} from './_utils/global-config'
import type { App } from 'vue'

type ComponentType = any

export function installComponent(
  app: App,
  component: ComponentType,
  options?: SheepUIOptions
) {
  const componentPrefix = getComponentPrefix(options)
  const registered = app.component(component.name)
  console.log(componentPrefix + component.name, component)
  if (!registered) {
    setGlobalConfig(app, options)
    app.component(component.name, component)
  }
}
