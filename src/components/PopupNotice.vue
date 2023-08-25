<template>
  <div class="modal-overlay" v-show="this.noticeToggle.pinia_show_notice">
    <div class="modal">
      <div class="p-1">
        <h1>Memproses..</h1>
      </div>

      <div class="p-1">
        <h1>Berhasil Tersimpan.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import {useNoticeToggle} from '../stores/notice_state'

export default {
    setup() {
        const noticeToggle = useNoticeToggle()

        return {noticeToggle}
    },
};
</script>

<style></style>
