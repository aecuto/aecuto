#!/usr/bin/env python3.7

import iterm2
# This script was created with the "basic" environment which does not support adding dependencies
# with pip.

async def async_start(session, service_name):
    await session.async_set_name(service_name)
    await session.async_send_text('cd ~/Documents/fanz/' + service_name + '\n')
    await session.async_send_text('git checkout develop\n')
    await session.async_send_text('git pull\n')

async def main(connection):
    # Your code goes here. Here's a bit of example code that adds a tab to the current window:
    app = await iterm2.async_get_app(connection)
    window = app.current_terminal_window
    if window is not None:
        tab = window.current_tab
        current_session = tab.current_session

        repo_list = ['fanz-frontend', 'fanz-payment-frontend', 'fanz-pos-frontend', 'fanz-management-service', 'fanz-payment-service', 'fanz-pos']
  
        for repo in repo_list:
            session = await current_session.async_split_pane(vertical=True)
            await async_start(session,repo)

        await current_session.async_close(True)
    else:
        # You can view this message in the script console.
        print("No current window")

iterm2.run_until_complete(main)
