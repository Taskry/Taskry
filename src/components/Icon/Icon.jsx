// 테마
import { TbSun, TbMoon, TbSunMoon } from 'react-icons/tb';

// 사용자
import { TbUsers, TbUserPlus, TbUserCircle, TbUserCheck } from 'react-icons/tb';

// CRUD?
import { TbPencil, TbEdit, TbTrash } from 'react-icons/tb';

// 캘린더 / 시계
import {
  TbCalendar,
  TbCalendarStar,
  TbCalendarCheck,
  TbCalendarShare,
  TbCalendarPlus,
  TbCalendarEventFilled
} from 'react-icons/tb';
import { TbClock } from 'react-icons/tb';

// 검색 / 필터
import { TbSearch, TbFilter } from 'react-icons/tb';

// 일정
import {
  TbLayoutBoard,
  TbNotes,
  TbChecklist,
  TbDetails,
  TbLayoutKanbanFilled,
  TbProgressAlert
} from 'react-icons/tb';

// 확인
import { TbCircleCheck, TbCircleCheckFilled, TbSquareCheck } from 'react-icons/tb';

// 기타
import { TbX } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { PiImageSquare } from 'react-icons/pi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { GoKebabHorizontal } from 'react-icons/go';
import { GrTextAlignFull } from 'react-icons/gr';

function ThemeIcon() {
  return (
    <div className="flex gap-2">
      <TbSun size={30} />
      <TbMoon size={30} />
      <TbSunMoon size={30} />
    </div>
  );
}

function UserIcon() {
  return (
    <div className="flex gap-2">
      <TbUsers size={30} />
      <TbUserPlus size={30} />
      <TbUserCircle size={30} />
      <TbUserCheck size={30} />
    </div>
  );
}

function CrudIcon() {
  return (
    <div className="flex gap-2">
      <TbPencil size={30} />
      <TbEdit size={30} />
      <TbTrash size={30} />
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="flex gap-2">
      <TbCalendar size={30} />
      <TbCalendarStar size={30} />
      <TbCalendarCheck size={30} />
      <TbCalendarShare size={30} />
      <TbCalendarPlus size={30} />
      <TbCalendarEventFilled size={30} />
      <TbClock size={30} />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="flex gap-2">
      <TbSearch size={30} />
      <TbFilter size={30} />
    </div>
  );
}

function TeskIcon() {
  return (
    <div className="flex gap-2">
      <TbLayoutBoard size={30} />
      <TbNotes size={30} />
      <TbChecklist size={30} />
      <TbDetails size={30} />
      <TbLayoutKanbanFilled size={30} />
      <TbProgressAlert size={30} />
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="flex gap-2">
      <TbCircleCheck size={30} />
      <TbCircleCheckFilled size={30} />
      <TbSquareCheck size={30} />
    </div>
  );
}

function EtcIcon() {
  return (
    <div className="flex gap-2">
      <TbX size={30} />
      <IoIosArrowDown size={30} />
      <IoEye size={30} />
      <PiImageSquare size={30} />
      <HiOutlineSpeakerphone size={30} />
      <GoKebabHorizontal size={30} />
      <GrTextAlignFull size={30} />
    </div>
  );
}
export { ThemeIcon, UserIcon, CrudIcon, CalendarIcon, SearchIcon, TeskIcon, CheckIcon, EtcIcon };
