import {defineStore} from 'pinia'

export const useNoticeToggle = defineStore(
    'noticeToggle', {
        state: () => ({
            pinia_show_notice: false,
            pinia_show_success: false,
            pinia_show_error: false
        }),
        actions: {
            toggleNotice() {
                this.pinia_show_notice = !this.pinia_show_notice
            },
            toggleResult(bool) {
                if (bool) {
                    this.pinia_show_success = true
                    this.pinia_show_error = false

                } else {
                    this.pinia_show_error = true
                    this.pinia_show_success = false

                }

                setTimeout(() => {
                    this.toggleNotice()
                    this.pinia_show_success = false
                    this.pinia_show_error = false
                }, 3000)
            }
        }
    }
)