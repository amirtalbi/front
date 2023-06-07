<template>
  <div class="flex flex-row justify-around w-10/12 mx-auto my-12">
    <div class="grid grid-cols-2 w-9/12 mx-auto">
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Notes
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Projet tutoré
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black mt-8"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Prochains cours
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black mt-8"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Cours
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-5/12">
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Emploie du temps
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {
          id: 1,
          matiere: "Symfony",
          note: 18.25,
        },
        {
          id: 2,
          matiere: "Anglais",
          note: 16,
        },
        {
          id: 3,
          matiere: "Python",
          note: 14.75,
        },
      ],
    };
  },
};
</script>