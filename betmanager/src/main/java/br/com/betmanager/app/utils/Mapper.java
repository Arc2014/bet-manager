package br.com.betmanager.app.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mapping.model.MappingException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Mapper {

    @Autowired
    private org.dozer.Mapper mapper;

    public <T> T map(Object source, Class<T> destinationClass) throws MappingException {
        return mapper.map(source, destinationClass);
    }

    public <T, E> List<T> map(List<E> sourceList, Class<T> destinationClass) throws MappingException {
        List<T> convertedList = new ArrayList<>();

        for (E source : sourceList) {
            T target = map(source, destinationClass);
            convertedList.add(target);
        }

        return convertedList;
    }
}
