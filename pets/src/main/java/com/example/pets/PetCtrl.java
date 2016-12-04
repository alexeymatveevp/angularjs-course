package com.example.pets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

/**
 * User: david
 * Date: 04.12.2016
 * Time: 15:16
 */
@RestController
public class PetCtrl {

    @Autowired
    private PetRepo repo;

    @RequestMapping(value = "/pets", method = RequestMethod.GET)
    public Result<List<Pet>> getPets() {
        List<Pet> all = repo.findAll();
        if (all != null) {
            return new Result<>(true, all);
        }
        return new Result<>(false);
    }

    @RequestMapping(value = "/pet", method = RequestMethod.POST)
    public Result<Long> addPet(@RequestParam String name,
                               @RequestParam(required = false) PetType type) {
        try {
            Pet pet = new Pet();
            pet.setName(name);
            if (type == null) {
                type = PetType.OTHER;
            }
            pet.setType(type);
            Pet savedPet = repo.save(pet);
            return new Result<>(true, savedPet.getId());
        } catch (Exception e) {
            return new Result<>(false);
        }
    }

    @RequestMapping(value = "/pet/{petId}", method = RequestMethod.PUT)
    public Result<Void> updatePet(@PathVariable Long petId,
                                @RequestParam String name,
                               @RequestParam(required = false) PetType type) {
        try {
            Pet pet = repo.findOne(petId);
            if (pet == null) {
                return new Result<>(false);
            }
            if (type == null) {
                type = PetType.OTHER;
            }
            pet.setName(name);
            pet.setType(type);
            repo.save(pet);
        } catch (Exception e) {
            return new Result<>(false);
        }
        return new Result<>(true);
    }

    @RequestMapping(value = "/pet/{petId}", method = RequestMethod.DELETE)
    public Result<Void> deletePet(@PathVariable Long petId) {
        try {
            repo.delete(petId);
        } catch (Exception e) {
            return new Result<>(false);
        }
        return new Result<>(true);
    }

}
