<template>
  <div class="marker-view">
    <div class="container">
      <!-- Header -->
      <div class="section-card animate-fade-in-up">
        <div class="toolbar-title">
          <span class="mdi mdi-map-marker-multiple"></span>
          เซ็นเซอร์ทางข้ามทั้งหมด
        </div>

        <!-- Sensor Table -->
        <div class="marker-view__table-wrapper">
          <table class="marker-table">
            <thead>
              <tr>
                <th>#</th>
                <th>ชื่อจุดทางข้าม</th>
                <th>สถานะ</th>
                <th>การกดวันนี้</th>
                <th>อัพเดทล่าสุด</th>
                <th>ดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(sensor, index) in sensors"
                :key="sensor.id"
                class="animate-fade-in-up"
                :style="{ animationDelay: `${index * 40}ms` }"
              >
                <td class="marker-table__num">{{ index + 1 }}</td>
                <td>
                  <div class="marker-table__name">
                    <span class="mdi mdi-map-marker" :class="sensor.statusClass"></span>
                    {{ sensor.name }}
                  </div>
                </td>
                <td>
                  <span class="status-badge" :class="sensor.statusClass">
                    {{ sensor.statusText }}
                  </span>
                </td>
                <td class="marker-table__count">{{ sensor.todayCount }} ครั้ง</td>
                <td class="marker-table__date">{{ sensor.lastUpdate }}</td>
                <td>
                  <button class="action-btn" title="ดูรายละเอียด">
                    <span class="mdi mdi-eye-outline"></span>
                  </button>
                  <button class="action-btn" title="ดูบนแผนที่">
                    <span class="mdi mdi-map-search-outline"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sensorNames = [
  'หน้าตลาดสมเพชรคูเมืองด้านนอก',
  'หน้าตลาดสมเพชรคูเมืองด้านใน',
  'แยกข่วงสิงห์ คูเมืองด้านนอก',
  'แยกข่วงสิงห์ คูเมืองด้านใน',
  'หน้าวัดพระสิงห์ คูเมืองด้านนอก',
  'หน้าวัดพระสิงห์ คูเมืองด้านใน',
  'หน้าประตูเชียงใหม่ คูเมืองด้านนอก',
  'หน้าร.ร.ยุพราชวิทยาลัย ถ.พระปกเกล้า',
  'หน้าประตูท่าแพ คูเมืองด้านนอก',
  'หน้าประตูท่าแพ คูเมืองด้านใน',
  'หน้าอนุสาวรีย์สามกษัตริย์ฝั่งตลาด',
  'หน้าอนุสาวรีย์สามกษัตริย์ฝั่งวัด',
  'แยกศาลเด็ก ถ.มูลเมือง',
  'หน้าประตูสวนดอก คูเมืองด้านนอก',
  'หน้าวัดเจดีย์หลวง ถ.พระปกเกล้า 1',
  'หน้าวัดเจดีย์หลวง ถ.พระปกเกล้า 2',
  'หน้าร.ร.มงฟอร์ตวิทยาลัย',
  'หน้าคณะทันตแพทย์',
  'หน้าโรงพยาบาลมหาราชนครเชียงใหม่',
  'แยกแม่ปิง คูเมืองด้านนอก',
]

const sensors = ref(
  sensorNames.map((name, i) => {
    const isError = [2, 7, 15, 18].includes(i)
    return {
      id: i + 1,
      name,
      statusClass: isError ? 'status--error' : 'status--online',
      statusText: isError ? 'ผิดปกติ' : 'ปกติ',
      todayCount: isError ? 0 : Math.floor(Math.random() * 25),
      lastUpdate: isError ? 'ไม่ทราบ' : '2 เดือนที่แล้ว',
    }
  })
)
</script>

<style scoped>
.marker-view__table-wrapper {
  overflow-x: auto;
  padding: 0;
}

.marker-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.marker-table thead {
  background: #f5f5f5;
}

.marker-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: var(--text-secondary);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: nowrap;
  border-bottom: 2px solid var(--border-color);
}

.marker-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
}

.marker-table tbody tr {
  transition: background var(--transition-fast);
}

.marker-table tbody tr:hover {
  background: rgba(63, 81, 181, 0.04);
}

.marker-table__num {
  color: var(--text-secondary);
  font-weight: 500;
  width: 40px;
}

.marker-table__name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.marker-table__name .mdi {
  font-size: 1.2rem;
}

.marker-table__count {
  font-weight: 600;
  color: var(--indigo);
}

.marker-table__date {
  color: var(--text-secondary);
  font-size: 0.8rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
}

.status--online {
  color: var(--success);
}

.status-badge.status--online {
  background: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.status--error {
  color: var(--error);
}

.status-badge.status--error {
  background: rgba(255, 82, 82, 0.1);
  color: #c62828;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: transparent;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  margin-right: 4px;
}

.action-btn:hover {
  background: rgba(63, 81, 181, 0.1);
  color: var(--indigo);
}

.action-btn .mdi {
  font-size: 1.15rem;
}
</style>
