import { useEffect } from 'react'
import { RootLayout, Sidebar, Content } from 'renderer/components/AppLayout'
import { DraggableTopBar } from 'renderer/components/DraggableTopBar'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  return (
    <>
     <RootLayout>
        <DraggableTopBar />
      <>
      <Sidebar className="py-2">
        {/* Sidebar content */}
      </Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">
      </Content>
      </>
    </RootLayout>
    </>
   
  )
}