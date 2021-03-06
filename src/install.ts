import {
  getComponentPrefix,
  setGlobalConfig,
  SheepUIOptions
} from './_utils/global-config'
import type { App } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentType = any

export function installComponent(
  app: App,
  component: ComponentType,
  options?: SheepUIOptions
) {
  const componentPrefix = getComponentPrefix(options)
  const registered = app.component(componentPrefix + component.name)
  if (!registered) {
    setGlobalConfig(app, options)
    app.component(componentPrefix + component.name, component)
  }
}
