import { create } from 'zustand';
import { Engineer } from '../../../../../../../Backend/white-clinic-back/src/whiteClinic/entity/engineer.entity';
import { engineerName } from '@/constants/definition';

type EngineerData = {
  fetchEngineer: () => Promise<void>; //데이터를 가져오는 함수
  
  engineers: Engineer[]; //엔지니어의 정보를 담아주는 객체생성
  setEngineers: (engineers: Engineer[]) => void; //가져온 데이터를 set해주는 함수

  engineerName: string[];
  setEngineerName: (engineerName: string[]) => void;

  
};

export const useEngineerStore = create<EngineerData>((set) => ({
  engineers: [],
  setEngineers: (engineers) => set({ engineers }),
  engineerName: [],
  setEngineerName: (engineerName) => set({ engineerName }),

  fetchEngineer: async () => {
    try {
      const response = await fetch('http://localhost:9090/engineer/info');
      if (!response.ok) {
        throw new Error('에러발생');
      }

      //정보 담아준다.
      const engineers: Engineer[] = await response.json();
      console.log(engineers);

      //정보 설정해준다.
      set({ engineers });

      //이름만 뽑아준다.
      const engineerName = engineers.map((engineers) => engineers.name);
      console.log(engineerName);

      //이름을 설정해준다.
      set({ engineerName });
    } catch (error) {
      console.error('정보를 성공적으로 가져오지못함', error);
    }
  },
}));
